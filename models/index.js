// const path = require('path');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const config = require('../config/config');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// User
// db.User = require('./user').User(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

// TODO: need to be moved into /models/users.js file. How ?
// Add instance method in User
db.User.prototype.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this.id, isAdmin: this.isAdmin, name: this.name, email: this.email },
    config.jwtPrivateKey
  );
  return token;
};

// Add class method in User
db.User.validateUser = function (user) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(user, schema);
};

db.User.generateHash = async function (password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

db.User.comparePassword = async function (loginPassword, savedPassword) {
  const result = await bcrypt.compare(loginPassword, savedPassword);
  return result;
};

// Main subject : lecture, instructor, course
db.Lecture = require('./lecture')(sequelize, Sequelize);
db.Instructor = require('./instructor')(sequelize, Sequelize);
db.Course = require('./course')(sequelize, Sequelize);
// ETC
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Topic = require('./topic')(sequelize, Sequelize);

// instructor : topic = N : M
db.InstructorTopic = require('./instructors_topic')(sequelize, Sequelize);
db.InstructorTopic.belongsTo(db.Instructor);
db.InstructorTopic.belongsTo(db.Topic);

db.LectureTopic = require('./lectures_topic')(sequelize, Sequelize);
db.LectureTopic.belongsTo(db.Lecture);
db.LectureTopic.belongsTo(db.Topic);

// lecture : instructor = N : M
db.LectureInstructor = require('./lectures_instructor')(sequelize, Sequelize);
db.LectureInstructor.belongsTo(db.Lecture);
db.LectureInstructor.belongsTo(db.Instructor);

// hashtag = { lecture, instructor, course }= N : M
// db.Lecture.belongsToMany(db.Topic, { through: 'LectureTopic' });
// db.Topic.belongsToMany(db.Lecture, { through: 'LectureTopic' });
// db.Instructor.belongsToMany(db.Topic, { through: 'InstructorTopic' });
// db.Topic.belongsToMany(db.Instructor, { through: 'InstructorTopic' });
// db.Course.belongsToMany(db.Topic, { through: 'CourseTopic' });
// db.Topic.belongsToMany(db.Course, { through: 'CourseTopic' });

// course : lecture = N : M
// db.Course.belongsToMany(db.Lecture, { through: 'CourseLecture' });
// db.Lecture.belongsToMany(db.Course, { through: 'CourseLecture' });

// comment : { lecture, instructor, course }  = N : M
// db.Comment.belongsToMany(db.Lecture, { through: 'CommentLecture' });
// db.Lecture.belongsToMany(db.Comment, { through: 'CommentLecture' });
// db.Comment.belongsToMany(db.Instructor, { through: 'CommentInstructor' });
// db.Instructor.belongsToMany(db.Comment, { through: 'CommentInstructor' });
// db.Comment.belongsToMany(db.Course, { through: 'CommentCourse' });
// db.Course.belongsToMany(db.Comment, { through: 'CommentCourse' });

// user : comment = 1 : N
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

// user : course = 1 : N
db.User.hasMany(db.Course);
db.Course.belongsTo(db.User);

module.exports = db;

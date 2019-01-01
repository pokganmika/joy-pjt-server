const path = require('path');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const config = require('../config/config');

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
db.User.prototype.generateAuthToken = function() {
  const token = jwt.sign(
    { id: this.id, isAdmin: this.isAdmin, name: this.name, email: this.email },
    config.jwtPrivateKey
  );
  return token;
};
// Add class method in User
db.User.validateUser = function(user) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(user, schema);
};

// Main subject : lecture, instructor, course
db.Lecture = require('./lecture')(sequelize, Sequelize);
db.Instructor = require('./instructor')(sequelize, Sequelize);
db.Course = require('./course')(sequelize, Sequelize);
// ETC
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Topic = require('./topic')(sequelize, Sequelize);

// user : comment = 1 : N
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

// instructor : lecture = 1 : N
db.Instructor.hasMany(db.Lecture);
db.Lecture.belongsTo(db.Instructor);

// user : course = 1 : N
db.User.hasMany(db.Course);
db.Course.belongsTo(db.User);

// hashtag = { lecture, instructor, course }= N : M
db.Lecture.belongsToMany(db.Hashtag, { through: 'LectureHashtag' });
db.Hashtag.belongsToMany(db.Lecture, { through: 'LectureHashtag' });
db.Instructor.belongsToMany(db.Hashtag, { through: 'InstructorHashtag' });
db.Hashtag.belongsToMany(db.Instructor, { through: 'InstructorHashtag' });
db.Course.belongsToMany(db.Hashtag, { through: 'CourseHashtag' });
db.Hashtag.belongsToMany(db.Course, { through: 'CourseHashtag' });

// course : lecture = N : M
db.Course.belongsToMany(db.Lecture, { through: 'CourseLecture' });
db.Lecture.belongsToMany(db.Course, { through: 'CourseLecture' });

// comment : { lecture, instructor, course }  = N : M
db.Comment.belongsToMany(db.Lecture, { through: 'CommentLecture' });
db.Lecture.belongsToMany(db.Comment, { through: 'CommentLecture' });
db.Comment.belongsToMany(db.Instructor, { through: 'CommentInstructor' });
db.Instructor.belongsToMany(db.Comment, { through: 'CommentInstructor' });
db.Comment.belongsToMany(db.Course, { through: 'CommentCourse' });
db.Course.belongsToMany(db.Comment, { through: 'CommentCourse' });

module.exports = db;

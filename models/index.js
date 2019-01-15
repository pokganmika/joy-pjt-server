// const path = require('path');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const config = require('../config/config');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const Avatars = require('@dicebear/avatars').default;
const SpriteCollection = require('@dicebear/avatars-identicon-sprites').default;
const awsS3 = require('../services/awsS3');

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

db.User.generateAvatar = async seedForAvatar => {
  let avatars = new Avatars(SpriteCollection);
  let svg = avatars.create(seedForAvatar);

  let file = {};
  file.name = seedForAvatar;
  file.data = svg;
  const { Location: avatar } = await awsS3.upload(file);

  console.log('[+] generateAvatar : ', avatar);
  return avatar;
};

// Main subject : lecture, instructor, course
db.Lecture = require('./lecture')(sequelize, Sequelize);
db.Instructor = require('./instructor')(sequelize, Sequelize);
db.Course = require('./course')(sequelize, Sequelize);
db.Book = require('./book')(sequelize, Sequelize);
// ETC
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Topic = require('./topic')(sequelize, Sequelize);
// Review
db.Review = require('./review')(sequelize, Sequelize);
// db.ReviewBook = require('./reviewbook')(sequelize, Sequelize);
// db.ReviewInstructor = require('./reviewInstructor')(sequelize, Sequelize);
// db.ReviewLecture = require('./reviewLecture')(sequelize, Sequelize);

// Topic = { lecture, instructor, course }= N : M
db.Instructor.belongsToMany(db.Topic, { through: 'InstructorTopic' });
db.Topic.belongsToMany(db.Instructor, { through: 'InstructorTopic' });
db.Lecture.belongsToMany(db.Topic, { through: 'LectureTopic' });
db.Topic.belongsToMany(db.Lecture, { through: 'LectureTopic' });
db.Book.belongsToMany(db.Topic, { through: 'BookTopic' });
db.Topic.belongsToMany(db.Book, { through: 'BookTopic' });

db.Lecture.belongsToMany(db.Instructor, { through: 'LectureInstructor' });
db.Instructor.belongsToMany(db.Lecture, { through: 'LectureInstructor' });
db.Book.belongsToMany(db.Instructor, { through: 'BookLecture' });
db.Instructor.belongsToMany(db.Book, { through: 'BookLecture' });

// Review
// db.User.belongsToMany(db.ReviewBook, { through: 'UserReviewBook' });
// db.ReviewBook.belongsToMany(db.User, { through: 'UserReviewBook' });
// db.Book.belongsToMany(db.ReviewBook, { through: 'BookReviewBook' });
// db.ReviewBook.belongsToMany(db.Book, { through: 'BookReviewBook' });
// db.User.belongsToMany(db.ReviewInstructor, { through: 'UserReviewInstructor' });
// db.ReviewInstructor.belongsToMany(db.User, { through: 'UserReviewInstructor' });
// db.Instructor.belongsToMany(db.ReviewInstructor, {
//   through: 'InstructorReviewInstructor'
// });
// db.ReviewInstructor.belongsToMany(db.Instructor, {
//   through: 'InstructorReviewInstructor'
// });
// db.User.belongsToMany(db.ReviewLecture, { through: 'UserReviewLecture' });
// db.ReviewLecture.belongsToMany(db.User, { through: 'UserReviewLecture' });
// db.Lecture.belongsToMany(db.ReviewLecture, { through: 'LectureReviewLecture' });
// db.ReviewLecture.belongsToMany(db.Lecture, { through: 'LectureReviewLecture' });
db.Instructor.hasMany(db.Review);
db.Review.belongsTo(db.Instructor);
db.Lecture.hasMany(db.Review);
db.Review.belongsTo(db.Lecture);
db.Course.hasMany(db.Review);
db.Review.belongsTo(db.Course);
db.User.hasMany(db.Review);
db.Review.belongsTo(db.User);
db.Book.hasMany(db.Review);
db.Review.belongsTo(db.Book);

// { instructor, lecture, book, course} : Comment = 1 : N
db.Instructor.hasMany(db.Comment);
db.Comment.belongsTo(db.Instructor);
db.Lecture.hasMany(db.Comment);
db.Comment.belongsTo(db.Lecture);
db.Course.hasMany(db.Comment);
db.Comment.belongsTo(db.Course);
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
db.Book.hasMany(db.Comment);
db.Comment.belongsTo(db.Book);

module.exports = db;

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
// const config = require(path.join(__dirname, '..', 'config', 'config.json'))[
//   env
// ];
const config = require(__dirname + '/../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Main subject : lecture, instructor, course
db.Lecture = require('./lecture')(sequelize, Sequelize);
db.Instructor = require('./instructor')(sequelize, Sequelize);
db.Course = require('./course')(sequelize, Sequelize);
// ETC
db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);

// user : comment = 1 : N
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);

// instructor : lecture = 1 : N
db.Instructor.hasMany(db.Lecture);
db.Lecture.belongsTo(db.Instructor);

// user : course = 1 : N
db.User.hasMany(db.Course);
db.Course.belongsTo(db.User);

// comment : { lecture, instructor, course }  = 1 : 1
db.Comment.hasOne(db.Lecture);
db.Lecture.belongsTo(db.Comment);
db.Comment.hasOne(db.Instructor);
db.Instructor.belongsTo(db.Comment);
db.Comment.hasOne(db.Course);
db.Course.belongsTo(db.Comment);

// lecture : hashtag = N : M
db.Lecture.belongsToMany(db.Hashtag, { through: 'LectureHashtag' });
db.Hashtag.belongsToMany(db.Lecture, { through: 'LectureHashtag' });

// course : lecture = N : M
db.Course.belongsToMany(db.Lecture, { through: 'CourseLecture' });
db.Lecture.belongsToMany(db.Course, { through: 'CourseLecture' });

/*
db.User.hasMany(db.Comment, {
  foreignKey: 'commenter',
  sourceKey: 'id'
});
db.Comment.belongsTo(db.User, {
  foreignKey: 'commenter',
  targetKey: 'id'
});

db.Instructor.hasMany(db.Lecture, {
  foreignKey: 'tutor',
  sourceKey: 'id'
});
db.Lecture.belongsTo(db.Instructor, {
  foreignKey: 'tutor',
  targetKey: 'id'
});
*/

module.exports = db;

const initializeTopics = require('./topic');
const initializeInstructors = require('./instructors');
const initializeLecture = require('./lecture');
const initializeBook = require('./book');

var initDb = () => {
  initializeTopics();
  initializeInstructors();

  initializeLecture();
  initializeBook();
};

initDb();
module.exports = initDb;

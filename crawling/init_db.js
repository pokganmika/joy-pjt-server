const initializeTopics = require('./topic');
const initializeInstructors = require('./instructors');
const InitializeLecture = require('./lecture');

var initDb = () => {
  initializeTopics();
  initializeInstructors();
  InitializeLecture();
};

initDb();
module.exports = initDb;

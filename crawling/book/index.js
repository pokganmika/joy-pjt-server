var Book = require('../../models').Book;
// var LectureTopic = require('../../models').LectureTopic;

var initializeLecture = () => {
  Book.create({
    name: 'JavaScript: The Good Parts',
    url:
      'https://www.amazon.com/gp/product/0596517742/ref=dbs_a_def_rwt_bibl_vppi_i0',
    screenshot:
      'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['Douglas Crockford']);
  });

  Book.create({
    name: 'JavaScript: The Definitive Guide: Activate Your Web Pages',
    url:
      'https://www.amazon.com/gp/product/0596805527/ref=dbs_a_def_rwt_bibl_vppi_i0',
    screenshot:
      'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['David Flanagan']);
  });

  Book.create({
    name: '',
    url: '',
    screenshot: '',
    free: true,
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['']);
  });

  Book.create({
    name: '',
    url: '',
    screenshot: '',
    free: true,
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['']);
  });

  Book.create({
    name: '',
    url: '',
    screenshot: '',
    free: true,
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['']);
  });

  Book.create({
    name: '',
    url: '',
    screenshot: '',
    free: true,
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['']);
  });

  Book.create({
    name: '',
    url: '',
    screenshot: '',
    free: true,
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['']);
  });

  Book.create({
    name: '',
    url: '',
    screenshot: '',
    free: true,
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['']);
  });
};

var initLecture = () => {
  initializeLecture();
};

initLecture();
module.exports = initLecture;

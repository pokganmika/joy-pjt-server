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
    name: 'JavaScript and JQuery: Interactive Front-End Web Development',
    url:
      'https://www.amazon.com/gp/product/1118531647/ref=dbs_a_def_rwt_bibl_vppi_i2',
    screenshot:
      'https://images-na.ssl-images-amazon.com/images/I/41y31M-zcgL._SX400_BO1,204,203,200_.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['Jon Duckett']);
  });

  Book.create({
    name: 'HTML and CSS: Design and Build Websites',
    url:
      'https://www.amazon.com/gp/product/1118008189/ref=dbs_a_def_rwt_bibl_vppi_i1',
    screenshot: '',
    free: false
  }).then(lecture => {
    lecture.setTopics(['html', 'css']);
    lecture.setInstructors(['Jon Duckett']);
  });

  Book.create({
    name: 'Eloquent JavaScript',
    url:
      'https://www.amazon.com/gp/product/1593279507/ref=dbs_a_def_rwt_bibl_vppi_i0',
    screenshot:
      'https://images-na.ssl-images-amazon.com/images/I/51I9naPg55L._SX376_BO1,204,203,200_.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['Marijn Haverbeke']);
  });

  Book.create({
    name: "You Don't Know JS: Up & Going",
    url:
      'https://www.amazon.com/gp/product/1491924462/ref=dbs_a_def_rwt_bibl_vppi_i0',
    screenshot:
      'https://images-na.ssl-images-amazon.com/images/I/41FhogvNebL._SX331_BO1,204,203,200_.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['Kyle Simpson']);
  });

  Book.create({
    name: "You Don't Know JS: Scope & Closures",
    url:
      'https://www.amazon.com/gp/product/1449335586/ref=dbs_a_def_rwt_bibl_vppi_i1',
    screenshot: '',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['Kyle Simpson']);
  });

  Book.create({
    name: "You Don't Know JS: Async & Performance",
    url:
      'https://www.amazon.com/gp/product/1491904224/ref=dbs_a_def_rwt_bibl_vppi_i2',
    screenshot:
      'https://images-na.ssl-images-amazon.com/images/I/51Kb27EcNPL._SX331_BO1,204,203,200_.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['Kyle Simpson']);
  });
};

var initLecture = () => {
  initializeLecture();
};

initLecture();
module.exports = initLecture;

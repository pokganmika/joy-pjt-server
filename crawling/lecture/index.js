var Lecture = require('../../models').Lecture;
// var LectureTopic = require('../../models').LectureTopic;

var initializeLecture = () => {
  Lecture.create({
    name: '초보자를 위한 바닐라 JavaScript',
    url: 'https://academy.nomadcoders.co/courses/enrolled/435558',
    screenshot:
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/ySY5plO8Tay6VFtYnfD9',
    free: true,
    instructor: 'nicolas',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'JavaScript Basics for Beginners',
    url: 'https://codewithmosh.com/courses/enrolled/324741',
    screenshot:
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV',
    free: false,
    instructor: 'mosh'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'ES6 for everyone!',
    url: 'https://es6.io/',
    screenshot:
      'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'javascript 30',
    url: 'https://javascript30.com/',
    screenshot:
      'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'Modern JavaScript',
    url: 'https://tylermcginnis.com/courses/react-fundamentals-udacity/',
    screenshot:
      'http://www.ddaily.co.kr/data/photos/20150313/art_1427325311.jpg',
    free: true,
    instructor: 'TylerMcGinnis'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'Node.js 교과서',
    url: 'https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C/',
    screenshot:
      'https://mygaming.co.za/news/wp-content/uploads/2016/12/Code.jpg',
    free: true,
    instructor: 'zerocho',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });
};

var initLecture = () => {
  initializeLecture();
};

initLecture();
module.exports = initLecture;

var Lecture = require('../../models').Lecture;
var LectureTopic = require('../../models').LectureTopic;

var initializeLecture = () => {
  Lecture.create({
    name: '초보자를 위한 바닐라 JavaScript',
    url: 'https://academy.nomadcoders.co/courses/enrolled/435558',
    screenshot:
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/ySY5plO8Tay6VFtYnfD9',
    free: true,
    instructor: 'nicolas',
    lang: 'kor'
  });

  Lecture.create({
    name: 'JavaScript Basics for Beginners',
    url: 'https://codewithmosh.com/courses/enrolled/324741',
    screenshot:
      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV',
    free: false,
    instructor: 'mosh'
  });

  Lecture.create({
    name: 'ES6 for everyone!',
    url: 'https://es6.io/',
    screenshot:
      'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
    free: false,
    instructor: 'wesbos'
  });

  Lecture.create({
    name: 'javascript 30',
    url: 'https://javascript30.com/',
    screenshot:
      'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
    free: false,
    instructor: 'wesbos'
  });

  Lecture.create({
    name: 'Modern JavaScript',
    url: 'https://tylermcginnis.com/courses/react-fundamentals-udacity/',
    screenshot:
      'http://www.ddaily.co.kr/data/photos/20150313/art_1427325311.jpg',
    free: true,
    instructor: 'TylerMcGinnis'
  });

  Lecture.create({
    name: 'Node.js 교과서',
    url: 'https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C/',
    screenshot:
      'https://mygaming.co.za/news/wp-content/uploads/2016/12/Code.jpg',
    free: true,
    instructor: 'zerocho',
    lang: 'kor'
  });
};

var addLectureToTopic = () => {
  LectureTopic.create({
    lecture_name: '초보자를 위한 바닐라 JavaScript',
    topic_name: 'javascript'
  });

  LectureTopic.create({
    lecture_name: 'JavaScript Basics for Beginners',
    topic_name: 'javascript'
  });

  LectureTopic.create({
    lecture_name: 'ES6 for everyone!',
    topic_name: 'javascript'
  });

  LectureTopic.create({
    lecture_name: 'javascript 30',
    topic_name: 'javascript'
  });

  LectureTopic.create({
    lecture_name: 'Modern JavaScript',
    topic_name: 'javascript'
  });

  LectureTopic.create({
    lecture_name: 'Node.js 교과서',
    topic_name: ''
  });
};

var initLecture = () => {
  initializeLecture();
  addLectureToTopic();
};

initLecture();
module.exports = initLecture;

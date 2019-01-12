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

  Lecture.create({
    name: 'Mastering React',
    url: 'https://codewithmosh.com/p/mastering-react',
    screenshot: '',
    free: false,
    instructor: 'mosh',
    lang: 'eng'
  }).then(lecture => {
    lecture.setTopics(['react']);
  });

  Lecture.create({
    name: 'The Complete Node.js Course',
    url: 'https://codewithmosh.com/p/the-complete-node-js-course',
    screenshot: '',
    free: false,
    instructor: 'mosh',
    lang: 'eng'
  }).then(lecture => {
    lecture.setTopics(['node.js']);
  });

  Lecture.create({
    name: '[초급 풀스택] 유튜브 클론 코딩',
    url:
      'https://academy.nomadcoders.co/p/javascript-fullstack-from-zero-to-hero',
    screenshot: '',
    free: false,
    instructor: 'nicolas',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript', 'node.js', 'mongodb', 'aws', 'express']);
  });

  Lecture.create({
    name: '[JS 풀스택] 우버 클론 코딩',
    url:
      'https://academy.nomadcoders.co/p/nuber-fullstack-javascript-graphql-course',
    screenshot: '',
    free: false,
    instructor: 'nicolas',
    lang: ''
  }).then(lecture => {
    lecture.setTopics([
      'javascript',
      'typescript',
      'node.js',
      'graphql',
      'apollo',
      'aws'
    ]);
  });

  Lecture.create({
    name: '초보자를 위한 바닐라 JavaScript',
    url:
      'https://academy.nomadcoders.co/p/javascript-basics-for-absolute-beginners-kr',
    screenshot: '',
    free: false,
    instructor: 'nicolas',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'React Fundamentals',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/50507',
    screenshot: '',
    free: false,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['react']);
  });

  Lecture.create({
    name: 'redux',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/294390',
    screenshot: '',
    free: false,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['redux']);
  });

  Lecture.create({
    name: 'React Router',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/147194',
    screenshot: '',
    free: false,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['react']);
  });

  Lecture.create({
    name: 'React Native (Udacity)',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/336438',
    screenshot: '',
    free: false,
    instructor: 'tyler',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['reactnative']);
  });

  Lecture.create({
    name: 'React Fundamentals (Udacity)',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/336610',
    screenshot: '',
    free: false,
    instructor: 'tyler',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['react']);
  });

  Lecture.create({
    name: 'CSS GRID',
    url: 'https://cssgrid.io/',
    screenshot: '',
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['css']);
  });

  Lecture.create({
    name: 'Learn node',
    url: 'https://learnnode.com/',
    screenshot: '',
    free: false,
    instructor: 'wesbox',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['node.js']);
  });

  Lecture.create({
    name: 'Learn Redux',
    url: 'https://learnredux.com/',
    screenshot: '',
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['redux']);
  });

  Lecture.create({
    name: 'Modern React with Redux [2019 Update]',
    url: 'https://www.udemy.com/react-redux/?couponCode=4MORE1234',
    screenshot: '',
    free: false,
    instructor: 'stephen'
  }).then(lecture => {
    lecture.setTopics(['react', 'redux']);
  });

  Lecture.create({
    name: "ES6 Javascript: The Complete Developer's Guide",
    url: 'https://www.udemy.com/javascript-es6-tutorial/?couponCode=4MORE1234',
    screenshot: '',
    free: false,
    instructor: 'stephen',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['javascript']);
  });

  Lecture.create({
    name: 'Advanced React and Redux: 2018 Edition',
    url: 'https://www.udemy.com/react-redux-tutorial/?couponCode=4MORE1234',
    screenshot: '',
    free: false,
    instructor: 'stephen'
  }).then(lecture => {
    lecture.setTopics(['react', 'redux']);
  });

  Lecture.create({
    name: 'GraphQL with React: The Complete Developers Guide',
    url:
      'https://www.udemy.com/graphql-with-react-course/?couponCode=4MORE1234',
    screenshot: '',
    free: false,
    instructor: 'stephen',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['graphql', 'react']);
  });

  Lecture.create({
    name: 'The Coding Interview Bootcamp: Algorithms + Data Structures',
    url:
      'https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/?couponCode=4more1234',
    screenshot: '',
    free: false,
    instructor: 'stephen'
  }).then(lecture => {
    lecture.setTopics(['algorithm']);
  });

  Lecture.create({
    name: 'The Node.js Master Class',
    url: 'https://pirple.thinkific.com/courses/the-nodejs-master-class',
    screenshot:
      'https://s3.amazonaws.com/thinkific-import/116598/iFxOskqYSuy4Ll2AIJOM_node.png',
    free: false,
    instructor: 'pirple'
  }).then(lecture => {
    lecture.setTopics(['node.js']);
  });

  Lecture.create({
    name: 'Getting Started with Redux',
    url: 'https://egghead.io/courses/getting-started-with-redux',
    screenshot:
      'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png',
    free: true,
    instructor: 'gaearon'
  }).then(lecture => {
    lecture.setTopics(['']);
    lecture.setInstructors(['gaearon']);
  });

  Lecture.create({
    name: '',
    url: '',
    screenshot: '',
    free: false,
    instructor: ''
  }).then(lecture => {
    lecture.setTopics(['']);
  });

  Lecture.create({
    name: '',
    url: '',
    screenshot: '',
    free: false,
    instructor: ''
  }).then(lecture => {
    lecture.setTopics(['']);
  });

  Lecture.create({
    name: '',
    url: '',
    screenshot: '',
    free: false,
    instructor: ''
  }).then(lecture => {
    lecture.setTopics(['']);
  });

  Lecture.create({
    name: '',
    url: '',
    screenshot: '',
    free: false,
    instructor: ''
  }).then(lecture => {
    lecture.setTopics(['']);
  });

  Lecture.create({
    name: '',
    url: '',
    screenshot: '',
    free: false,
    instructor: ''
  }).then(lecture => {
    lecture.setTopics(['']);
  });
};

var initLecture = () => {
  initializeLecture();
};

initLecture();
module.exports = initLecture;

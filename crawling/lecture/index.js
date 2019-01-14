var Lecture = require('../../models').Lecture;
// var LectureTopic = require('../../models').LectureTopic;

var generateRandomPicture = () => {
  const pictures = [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1483203257148-66ee23170d09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1499125420603-3d9480e95907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1504164996022-09080787b6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1504608245011-62d9758c1bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    'https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&auto=format&fit=crop&w=1310&q=80',
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1366&q=80',
    'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2294&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
    'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80',
    'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80',
    'https://images.unsplash.com/photo-1522040806052-b0aa2b039f00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1850&q=80',
    'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1526920929362-5b26677c148c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80',
    'https://images.unsplash.com/photo-1527427337751-fdca2f128ce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1528292585222-33d2f5b8669c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1850&q=80',
    'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1782&q=80',
    'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2547&q=80',
    'https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1529661197280-63dc545366c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80',
    'https://images.unsplash.com/photo-1532338632835-29a242ef6307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1954&q=80',
    'https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1534137667199-675a46e143f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1850&q=80',
    'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1538251041490-6d69ea6ad775?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    'https://images.unsplash.com/photo-1541029318873-862bbc51a6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
    'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1541554862810-40a41423e2c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1542373285-a85124c4f3e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1542426262-2b8c6eb5fbea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2568&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1542831371-32f555c86880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    'https://images.unsplash.com/photo-1543966888-6e858b90d30d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2020&q=80',
    'https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2581&q=80',
    'https://images.unsplash.com/photo-1545112719-ce81d7de0b71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2611&q=80',
    'https://images.unsplash.com/uploads/14125120591540eb48427/c1c4b1aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2644&q=80'
  ];

  const randomIndex = Math.floor(Math.random() * pictures.length);
  return pictures[randomIndex];
};

var initializeLecture = () => {
  Lecture.create({
    name: '초보자를 위한 바닐라 JavaScript',
    url: 'https://academy.nomadcoders.co/courses/enrolled/435558',
    // screenshot:      'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/ySY5plO8Tay6VFtYnfD9',
    screenshot: generateRandomPicture(),
    free: true,
    instructor: 'nicolas',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['nicolas']);
  });

  Lecture.create({
    name: 'JavaScript Basics for Beginners',
    url: 'https://codewithmosh.com/courses/enrolled/324741',
    // screenshot:
    //   'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'mosh'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['mosh']);
  });

  Lecture.create({
    name: 'ES6 for everyone!',
    url: 'https://es6.io/',
    // screenshot:
    //   'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['wesbos']);
  });

  Lecture.create({
    name: 'javascript 30',
    url: 'https://javascript30.com/',
    // screenshot:
    //   'https://steemitimages.com/DQmP18L6k8EMHNfsvRNaRFWvka2GnRo8b8CpDuM3hbYGnqp/ff3ywn-1-800x533.jpg',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['wesbos']);
  });

  Lecture.create({
    name: 'Modern JavaScript',
    url: 'https://tylermcginnis.com/courses/react-fundamentals-udacity/',
    // screenshot:
    //   'http://www.ddaily.co.kr/data/photos/20150313/art_1427325311.jpg',
    screenshot: generateRandomPicture(),
    free: true,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['tyler']);
  });

  Lecture.create({
    name: 'Node.js 교과서',
    url: 'https://www.inflearn.com/course/node-js-%EA%B5%90%EA%B3%BC%EC%84%9C/',
    // screenshot:
    //   'https://mygaming.co.za/news/wp-content/uploads/2016/12/Code.jpg',
    screenshot: generateRandomPicture(),
    free: true,
    instructor: 'zerocho',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript', 'node.js']);
    lecture.setInstructors(['zerocho']);
  });

  Lecture.create({
    name: 'Mastering React',
    url: 'https://codewithmosh.com/p/mastering-react',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'mosh',
    lang: 'eng'
  }).then(lecture => {
    lecture.setTopics(['react']);
    lecture.setInstructors(['mosh']);
  });

  Lecture.create({
    name: 'The Complete Node.js Course',
    url: 'https://codewithmosh.com/p/the-complete-node-js-course',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'mosh',
    lang: 'eng'
  }).then(lecture => {
    lecture.setTopics(['node.js']);
    lecture.setInstructors(['mosh']);
  });

  Lecture.create({
    name: '[초급 풀스택] 유튜브 클론 코딩',
    url:
      'https://academy.nomadcoders.co/p/javascript-fullstack-from-zero-to-hero',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'nicolas',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript', 'node.js', 'mongodb', 'aws', 'express']);
    lecture.setInstructors(['nicolas']);
  });

  Lecture.create({
    name: '[JS 풀스택] 우버 클론 코딩',
    url:
      'https://academy.nomadcoders.co/p/nuber-fullstack-javascript-graphql-course',
    screenshot: generateRandomPicture(),
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
    lecture.setInstructors(['nicolas']);
  });

  Lecture.create({
    name: '초보자를 위한 바닐라 JavaScript',
    url:
      'https://academy.nomadcoders.co/p/javascript-basics-for-absolute-beginners-kr',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'nicolas',
    lang: 'kor'
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['nicolas']);
  });

  Lecture.create({
    name: 'React Fundamentals',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/50507',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['react']);
    lecture.setInstructors(['tyler']);
  });

  Lecture.create({
    name: 'redux',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/294390',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['redux']);
    lecture.setInstructors(['tyler']);
  });

  Lecture.create({
    name: 'React Router',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/147194',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'tyler'
  }).then(lecture => {
    lecture.setTopics(['react']);
    lecture.setInstructors(['tyler']);
  });

  Lecture.create({
    name: 'React Native (Udacity)',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/336438',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'tyler',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['reactnative']);
    lecture.setInstructors(['tyler']);
  });

  Lecture.create({
    name: 'React Fundamentals (Udacity)',
    url: 'https://learn.tylermcginnis.com/courses/enrolled/336610',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'tyler',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['react']);
    lecture.setInstructors(['tyler']);
  });

  Lecture.create({
    name: 'CSS GRID',
    url: 'https://cssgrid.io/',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['css']);
    lecture.setInstructors(['wesbos']);
  });

  Lecture.create({
    name: 'Learn node',
    url: 'https://learnnode.com/',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'wesbos',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['node.js']);
    lecture.setInstructors(['wesbos']);
  });

  Lecture.create({
    name: 'Learn Redux',
    url: 'https://learnredux.com/',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'wesbos'
  }).then(lecture => {
    lecture.setTopics(['redux']);
    lecture.setInstructors(['wesbos']);
  });

  Lecture.create({
    name: 'Modern React with Redux [2019 Update]',
    url: 'https://www.udemy.com/react-redux/?couponCode=4MORE1234',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'stephen'
  }).then(lecture => {
    lecture.setTopics(['react', 'redux']);
    lecture.setInstructors(['stephen']);
  });

  Lecture.create({
    name: "ES6 Javascript: The Complete Developer's Guide",
    url: 'https://www.udemy.com/javascript-es6-tutorial/?couponCode=4MORE1234',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'stephen',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['javascript']);
    lecture.setInstructors(['stephen']);
  });

  Lecture.create({
    name: 'Advanced React and Redux: 2018 Edition',
    url: 'https://www.udemy.com/react-redux-tutorial/?couponCode=4MORE1234',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'stephen'
  }).then(lecture => {
    lecture.setTopics(['react', 'redux']);
    lecture.setInstructors(['stephen']);
  });

  Lecture.create({
    name: 'GraphQL with React: The Complete Developers Guide',
    url:
      'https://www.udemy.com/graphql-with-react-course/?couponCode=4MORE1234',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'stephen',
    lang: ''
  }).then(lecture => {
    lecture.setTopics(['graphql', 'react']);
    lecture.setInstructors(['stephen']);
  });

  Lecture.create({
    name: 'The Coding Interview Bootcamp: Algorithms + Data Structures',
    url:
      'https://www.udemy.com/coding-interview-bootcamp-algorithms-and-data-structure/?couponCode=4more1234',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'stephen'
  }).then(lecture => {
    lecture.setTopics(['algorithm']);
    lecture.setInstructors(['stephen']);
  });

  Lecture.create({
    name: 'The Node.js Master Class',
    url: 'https://pirple.thinkific.com/courses/the-nodejs-master-class',
    // screenshot:
    //   'https://s3.amazonaws.com/thinkific-import/116598/iFxOskqYSuy4Ll2AIJOM_node.png',
    screenshot: generateRandomPicture(),
    free: false,
    instructor: 'pirple'
  }).then(lecture => {
    lecture.setTopics(['node.js']);
    lecture.setInstructors(['pirple']);
  });

  Lecture.create({
    name: 'Getting Started with Redux',
    url: 'https://egghead.io/courses/getting-started-with-redux',
    // screenshot:
    //   'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png',
    screenshot: generateRandomPicture(),
    free: true,
    instructor: 'gaearon'
  }).then(lecture => {
    lecture.setTopics(['']);
    lecture.setInstructors(['gaearon']);
  });

  Lecture.create({
    name: 'The Web Developer Bootcamp',
    url: 'https://www.udemy.com/the-web-developer-bootcamp/',
    screenshot:
      'https://udemy-images.udemy.com/course/480x270/625204_436a_2.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['']);
    lecture.setInstructors(['colt']);
  });

  Lecture.create({
    name: 'The Advanced Web Developer Bootcamp',
    url: 'https://www.udemy.com/the-advanced-web-developer-bootcamp/',
    screenshot:
      'https://udemy-images.udemy.com/course/480x270/1218586_9f86.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['']);
    lecture.setInstructors(['colt']);
  });

  Lecture.create({
    name: 'JavaScript Algorithms and Data Structures Masterclass',
    url: 'https://www.udemy.com/js-algorithms-and-data-structures-masterclass/',
    screenshot:
      'https://udemy-images.udemy.com/course/480x270/1406344_1d65_3.jpg',
    free: false
  }).then(lecture => {
    lecture.setTopics(['javascript', 'algorithm']);
    lecture.setInstructors(['colt']);
  });

  Lecture.create({
    name: '자바스크립트로 알아보는 함수형 프로그래밍',
    url:
      'https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/',
    screenshot:
      'https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/functional-programming.png',
    free: false,
    instructor: ''
  }).then(lecture => {
    lecture.setTopics(['javascript', 'functional']);
    lecture.setInstructors(['유인동']);
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

var Instructor = require('../../models').Instructor;

var initializeInstructors = () => {
  Instructor.create({
    name: 'nicolas',
    mainUrl: 'https://academy.nomadcoders.co/',
    gitHub: 'https://github.com/serranoarevalo',
    image: 'https://www.filepicker.io/api/file/Hfn2brfS1jwMefqbZrOQ'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js']);
    instructor.setLectures([
      '초보자를 위한 바닐라 JavaScript',
      '[초급 풀스택] 유튜브 클론 코딩',
      '[JS 풀스택] 우버 클론 코딩'
    ]);
  });

  Instructor.create({
    name: 'mosh',
    gitHub: 'https://github.com/mosh-hamedani',
    mainUrl: 'https://codewithmosh.com/',
    image:
      'https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js']);
    instructor.setLectures([
      'JavaScript Basics for Beginners',
      'Mastering React',
      'The Complete Node.js Course'
    ]);
  });

  Instructor.create({
    name: 'wesbos',
    fullName: 'WesBos',
    gitHub: 'https://github.com/wesbos',
    mainUrl: 'https://wesbos.com/',
    image: 'https://avatars2.githubusercontent.com/u/176013?s=460&v=4'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js']);
    instructor.setLectures([
      'ES6 for everyone!',
      'javascript 30',
      'CSS GRID',
      'Learn Redux'
    ]);
  });

  Instructor.create({
    name: 'tyler',
    fullName: 'Tyler McGinnis',
    gitHub: 'https://github.com/tylermcginnis',
    mainUrl: 'https://tylermcginnis.com/',
    image: 'https://avatars1.githubusercontent.com/u/2933430?s=460&v=4'
  }).then(instructor => {
    instructor.setTopics(['react']);
    instructor.setLectures([
      'Modern JavaScript',
      'React Fundamentals',
      'redux',
      'React Router',
      'React Fundamentals (Udacity)'
    ]);
  });

  Instructor.create({
    name: 'zerocho',
    gitHub: 'https://github.com/ZeroCho',
    mainUrl: 'https://www.zerocho.com/',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mCsm-O6oq7I1HFzWQggU2BnUKsBAH7nYaRvVg=s48-c-k-c0xffffffff-no-rj-mo'
  }).then(instructor => {
    instructor.setTopics(['node.js']);
    instructor.setLectures(['Node.js 교과서']);
  });

  Instructor.create({
    name: 'velopert',
    gitHub: 'https://github.com/velopert',
    mainUrl: 'https://velopert.com/',
    image:
      'https://trello-avatars.s3.amazonaws.com/b3bd414d2fbf3e8d43a4b45f4d596316/170.png'
  }).then(instructor => {
    instructor.setTopics(['react']);
    instructor.setLectures([]);
  });

  Instructor.create({
    name: 'unsure-programmer',
    gitHub: '',
    mainUrl: 'https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mAstwu29YagZtXYej8NIekzubyiSUK7kEKjEw=s288-mo-c-c0xffffffff-rj-k-no'
  }).then(instructor => {
    instructor.setTopics(['reactnative']);
    instructor.setLectures([]);
  });

  Instructor.create({
    name: 'traversy-media',
    gitHub: '',
    mainUrl: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mDwFmBMeUdQ9GSpatt0J9QPSC0sPLQz_4mc_A=s288-mo-c-c0xffffffff-rj-k-no'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js', 'mongodb', 'html']);
    instructor.setLectures([]);
  });

  Instructor.create({
    name: 'academind',
    gitHub: '',
    mainUrl: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mC4twuaLeHHSfnzowVpRNJ4qhyn-8_DZUSShg=s288-mo-c-c0xffffffff-rj-k-no'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'react', 'node.js', 'graphql']);
    instructor.setLectures([]);
  });

  Instructor.create({
    name: 'stephen',
    gitHub: 'https://github.com/StephenGrider',
    mainUrl: 'https://www.rallycoding.com/',
    image: 'https://avatars2.githubusercontent.com/u/5003903?s=460&v=4'
  }).then(instructor => {
    instructor.setTopics([
      'javascript',
      'react',
      'node.js',
      'graphql',
      'reactnative'
    ]);
    instructor.setLectures([
      'Modern React with Redux [2019 Update]',
      "ES6 Javascript: The Complete Developer's Guide",
      'Advanced React and Redux: 2018 Edition',
      'GraphQL with React: The Complete Developers Guide',
      'The Coding Interview Bootcamp: Algorithms + Data Structures'
    ]);
  });

  Instructor.create({
    name: 'pirple',
    fullName: '',
    gitHub: '',
    mainUrl: 'https://pirple.thinkific.com/',
    image:
      'https://s3.amazonaws.com/thinkific-import/116598/cYiInJ14QTexS1zdpeTV_logo5.png'
  }).then(instructor => {
    instructor.setTopics(['node.js']);
    instructor.setLectures(['Learn node', 'The Node.js Master Class']);
  });

  Instructor.create({
    name: 'codewars.com',
    fullName: '',
    gitHub: '',
    mainUrl: 'https://www.codewars.com/',
    image:
      'https://www.codewars.com/assets/landing/copy-train-815de5a524d9a4b226ca7c6d1dae7d13.png'
  }).then(instructor => {
    instructor.setTopics(['coding']);
  });

  Instructor.create({
    name: 'Douglas Crockford',
    fullName: '',
    gitHub: '',
    mainUrl:
      'https://www.amazon.com/Douglas-Crockford/e/B002N3VYB6/ref=dp_byline_cont_book_1',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/A1yTSClLRPL._US230_.jpg'
  }).then(instructor => {
    instructor.setTopics(['javascript']);
  });

  Instructor.create({
    name: 'David Flanagan',
    fullName: '',
    gitHub: '',
    mainUrl:
      'https://www.amazon.com/David-Flanagan/e/B000APEZR4/ref=dp_byline_cont_book_1',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61ONpOKBYiL._US230_.jpg'
  }).then(instructor => {
    instructor.setTopics(['javascript']);
  });

  Instructor.create({
    name: 'Jon Duckett',
    fullName: '',
    gitHub: '',
    mainUrl:
      'https://www.amazon.com/Jon-Duckett/e/B001IR3Q7I/ref=dp_byline_cont_book_1',
    image:
      'https://m.media-amazon.com/images/G/01/author-pages/no-profile-image-placeholder-na._CB484118601_.png'
  }).then(instructor => {
    instructor.setTopics(['javascript']);
  });

  Instructor.create({
    name: 'Marijn Haverbeke',
    fullName: '',
    gitHub: '',
    mainUrl:
      'https://www.amazon.com/Marijn-Haverbeke/e/B00409LR2W/ref=dp_byline_cont_book_1',
    image:
      'https://m.media-amazon.com/images/G/01/author-pages/no-profile-image-placeholder-na._CB484118601_.png'
  }).then(instructor => {
    instructor.setTopics(['javascript']);
  });

  Instructor.create({
    name: 'Kyle Simpson',
    fullName: '',
    gitHub: '',
    mainUrl:
      'https://www.amazon.com/Kyle-Simpson/e/B006MAHIQ6/ref=dp_byline_cont_ebooks_1',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81MKAs6ZvjL._US230_.jpg'
  }).then(instructor => {
    instructor.setTopics(['javascript']);
  });
};

var initInstructor = () => {
  initializeInstructors();
};

initInstructor();
module.exports = initInstructor;

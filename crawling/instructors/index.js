var Instructor = require('../../models').Instructor;

var initializeInstructors = () => {
  Instructor.create({
    name: 'nicolas',
    mainUrl: 'https://academy.nomadcoders.co/',
    gitHub: 'https://github.com/serranoarevalo',
    image: 'https://www.filepicker.io/api/file/Hfn2brfS1jwMefqbZrOQ'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js']);
  });

  Instructor.create({
    name: 'mosh',
    gitHub: 'https://github.com/mosh-hamedani',
    mainUrl: 'https://codewithmosh.com/',
    image:
      'https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js']);
  });

  Instructor.create({
    name: 'wesbos',
    fullName: 'WesBos',
    gitHub: 'https://github.com/wesbos',
    mainUrl: 'https://wesbos.com/',
    image: 'https://avatars2.githubusercontent.com/u/176013?s=460&v=4'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js']);
  });

  Instructor.create({
    name: 'tyler',
    fullName: 'Tyler McGinnis',
    gitHub: 'https://github.com/tylermcginnis',
    mainUrl: 'https://tylermcginnis.com/',
    image: 'https://avatars1.githubusercontent.com/u/2933430?s=460&v=4'
  }).then(instructor => {
    instructor.setTopics(['react']);
  });

  Instructor.create({
    name: 'zerocho',
    gitHub: 'https://github.com/ZeroCho',
    mainUrl: 'https://www.zerocho.com/',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mCsm-O6oq7I1HFzWQggU2BnUKsBAH7nYaRvVg=s48-c-k-c0xffffffff-no-rj-mo'
  }).then(instructor => {
    instructor.setTopics(['node.js']);
  });

  Instructor.create({
    name: 'velopert',
    gitHub: 'https://github.com/velopert',
    mainUrl: 'https://velopert.com/',
    image:
      'https://trello-avatars.s3.amazonaws.com/b3bd414d2fbf3e8d43a4b45f4d596316/170.png'
  }).then(instructor => {
    instructor.setTopics(['react']);
  });

  Instructor.create({
    name: 'unsure-programmer',
    gitHub: '',
    mainUrl: 'https://www.youtube.com/channel/UCiNWv52iO_OAdZ12kslG4Cg',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mAstwu29YagZtXYej8NIekzubyiSUK7kEKjEw=s288-mo-c-c0xffffffff-rj-k-no'
  }).then(instructor => {
    instructor.setTopics(['reactnative']);
  });

  Instructor.create({
    name: 'traversy-media',
    gitHub: '',
    mainUrl: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mDwFmBMeUdQ9GSpatt0J9QPSC0sPLQz_4mc_A=s288-mo-c-c0xffffffff-rj-k-no'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'node.js', 'mongodb', 'html']);
  });

  Instructor.create({
    name: 'Academind',
    gitHub: '',
    mainUrl: 'https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w',
    image:
      'https://yt3.ggpht.com/a-/AAuE7mC4twuaLeHHSfnzowVpRNJ4qhyn-8_DZUSShg=s288-mo-c-c0xffffffff-rj-k-no'
  }).then(instructor => {
    instructor.setTopics(['javascript', 'react', 'node.js', 'graphql']);
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
  });

  Instructor.create({
    name: 'pirple',
    fullName: '',
    gitHub: '',
    mainUrl: 'https://pirple.thinkific.com/',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['node.js']);
  });

  Instructor.create({
    name: '',
    fullName: '',
    gitHub: '',
    mainUrl: '',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['']);
  });

  Instructor.create({
    name: '',
    fullName: '',
    gitHub: '',
    mainUrl: '',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['']);
  });

  Instructor.create({
    name: '',
    fullName: '',
    gitHub: '',
    mainUrl: '',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['']);
  });

  Instructor.create({
    name: '',
    fullName: '',
    gitHub: '',
    mainUrl: '',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['']);
  });

  Instructor.create({
    name: '',
    fullName: '',
    gitHub: '',
    mainUrl: '',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['']);
  });

  Instructor.create({
    name: '',
    fullName: '',
    gitHub: '',
    mainUrl: '',
    image: ''
  }).then(instructor => {
    instructor.setTopics(['']);
  });
};

var initInstructor = () => {
  initializeInstructors();
};

initInstructor();
module.exports = initInstructor;

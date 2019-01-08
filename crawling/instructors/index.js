var Instructor = require('../../models').Instructor;
var Topic = require('../../models').Topic;
var InstructorTopic = require('../../models').InstructorTopic;

var initializeInstructors = () => {
  Instructor.create({
    name: 'nicolas',
    gitHub: 'https://github.com/serranoarevalo',
    mainUrl: 'https://academy.nomadcoders.co/',
    image: 'https://www.filepicker.io/api/file/Hfn2brfS1jwMefqbZrOQ'
  });

  Instructor.create({
    name: 'mosh',
    gitHub: 'https://github.com/mosh-hamedani',
    mainUrl: 'https://codewithmosh.com/',
    image:
      'https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png'
  });

  Instructor.create({
    name: 'wesbos',
    fullName: 'WesBos',
    gitHub: 'https://github.com/wesbos',
    mainUrl: 'https://wesbos.com/',
    image: 'https://avatars2.githubusercontent.com/u/176013?s=460&v=4'
  });

  Instructor.create({
    name: 'tyler',
    fullName: 'Tyler McGinnis',
    gitHub: 'https://github.com/tylermcginnis',
    mainUrl: 'https://tylermcginnis.com/',
    image: 'https://avatars1.githubusercontent.com/u/2933430?s=460&v=4'
  });

  Instructor.create({
    name: 'zerocho',
    gitHub: 'https://github.com/ZeroCho',
    mainUrl: 'https://www.zerocho.com/',
    image:
      'data:image/png;base64,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'
  });

  Instructor.create({
    name: 'velopert',
    gitHub: 'https://github.com/velopert',
    mainUrl: 'https://velopert.com/',
    image:
      'https://trello-avatars.s3.amazonaws.com/b3bd414d2fbf3e8d43a4b45f4d596316/170.png'
  });
};

var addInstructorToTopic = () => {
  InstructorTopic.create({
    instructor_name: 'nicolas',
    topic_name: 'javascript'
  });

  InstructorTopic.create({
    instructor_name: 'nicolas',
    topic_name: 'node.js'
  });

  InstructorTopic.create({
    instructor_name: 'mosh',
    topic_name: ''
  });

  InstructorTopic.create({
    instructor_name: 'wesbos',
    topic_name: 'node.js'
  });

  InstructorTopic.create({
    instructor_name: 'wesbos',
    topic_name: 'react'
  });

  InstructorTopic.create({
    instructor_name: 'tyler',
    topic_name: 'react'
  });

  InstructorTopic.create({
    instructor_name: 'zerocho',
    topic_name: 'node.js'
  });

  InstructorTopic.create({
    instructor_name: 'velopert',
    topic_name: 'react'
  });
};

var initInstructor = () => {
  initializeInstructors();
  addInstructorToTopic();
};

initInstructor();
module.exports = initInstructor;

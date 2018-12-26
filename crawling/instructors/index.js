var Lecture = require('../../models').Lecture;
var Instructor = require('../../models').Instructor;

Instructor.create({
  name: 'Nicolás',
  gitHub: 'https://github.com/serranoarevalo',
  mainUrl: 'https://academy.nomadcoders.co/courses/category/KR',
  avatar: 'https://www.filepicker.io/api/file/Hfn2brfS1jwMefqbZrOQ'
});

Instructor.create({
  name: 'WesBos',
  gitHub: 'https://github.com/wesbos',
  mainUrl: 'https://wesbos.com/',
  avatar: 'https://avatars2.githubusercontent.com/u/176013?s=460&v=4'
});

Instructor.create({
  name: 'TyperMcGinnis',
  gitHub: 'https://github.com/tylermcginnis',
  mainUrl: 'https://tylermcginnis.com/',
  avatar: 'https://avatars1.githubusercontent.com/u/2933430?s=460&v=4'
});

Instructor.create({
  name: 'Mosh',
  gitHub: 'https://github.com/mosh-hamedani',
  mainUrl: 'https://codewithmosh.com/',
  avatar:
    'https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png'
});

var Topic = require('../../models').Topic;

var initializeTopics = () => {
  Topic.create({
    name: 'JavaScript',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  });

  Topic.create({
    name: 'node.js',
    logo:
      'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
  });

  Topic.create({
    name: 'Python',
    logl:
      'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
  });

  Topic.create({
    name: 'react',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png'
  });

  Topic.create({
    name: 'ruby',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/480px-Ruby_logo.svg.png'
  });

  Topic.create({
    name: 'git',
    logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSFusff2muc5B3Qj-Vr0OaXdx5WnzsJBqD-5uNi6dTAOLQ-gBpA'
  });

  Topic.create({
    name: 'php',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/480px-PHP-logo.svg.png'
  });

  Topic.create({
    name: 'vue.js',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/300px-Vue.png'
  });

  Topic.create({
    name: 'angular',
    logo: 'https://teamextension.es/dist/img/skills/angularjs_og.png'
  });

  Topic.create({
    name: 'blockchain',
    logo: ''
  });

  Topic.create({
    name: '',
    logo: ''
  });

  Topic.create({
    name: '',
    logo: ''
  });

  Topic.create({
    name: '',
    logo: ''
  });

  Topic.create({
    name: '',
    logo: ''
  });

  Topic.create({
    name: '',
    logo: ''
  });

  Topic.create({
    name: '',
    logo: ''
  });
};

initializeTopics();

module.exports = initializeTopics;

var Topic = require('../../models').Topic;

var initializeTopics = () => {
  Topic.create({
    name: 'javascript',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  });

  Topic.create({
    name: 'node.js',
    logo:
      'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
  });

  Topic.create({
    name: 'python',
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
    logo: 'https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png'
  });

  Topic.create({
    name: 'android',
    logo: 'https://www.android.com/static/2016/img/share/andy-lg.png'
  });

  Topic.create({
    name: 'css',
    logo: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png'
  });

  Topic.create({
    name: 'django',
    logo:
      'https://s3.amazonaws.com/clarityfm-production/attachments/6605/default/django.png?1442839704'
  });

  Topic.create({
    name: 'express',
    logo:
      'https://cdn-images-1.medium.com/max/1200/1*EKW3XazCN98jcVrlEP3H8g.png'
  });

  Topic.create({
    name: 'aws',
    logo:
      'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
  });

  Topic.create({
    name: 'mongodb',
    logo:
      'https://cdn-images-1.medium.com/max/2000/1*Ta4qktHtO--RMUpnR08mBg.jpeg'
  });

  Topic.create({
    name: 'reactnative',
    logo:
      'https://cdn-images-1.medium.com/max/1600/1*safAvjgR68qpQCreDTOcYA.png'
  });

  Topic.create({
    name: 'swift',
    logo: 'https://developer.apple.com/swift/images/swift-og.png'
  });

  Topic.create({
    name: 'docker',
    logo:
      'https://subicura.com/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo.png'
  });

  Topic.create({
    name: 'typescript',
    logo:
      'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg'
  });

  Topic.create({
    name: 'graphql',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png'
  });

  Topic.create({
    name: 'apollo',
    logo:
      'https://cdn-images-1.medium.com/max/1600/1*BIR94Q8MDPonvvFtsnUYLg.png'
  });

  Topic.create({
    name: 'redux',
    logo:
      'https://camo.githubusercontent.com/77516f02a7fa8991a5d30524107a3d059701e6e5/68747470733a2f2f7261776769742e636f6d2f69537072696e672f626162656c2d7765627061636b2d72656163742d72656475782d7475746f7269616c732f6d61737465722f696d616765732f5265647578332e706e67'
  });

  Topic.create({
    name: 'mysql',
    logo:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png'
  });

  Topic.create({ name: 'prisma', logo: 'https://i.imgur.com/wD4rVt4.png' });

  Topic.create({
    name: 'html',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
  });

  Topic.create({
    name: 'jquery',
    logo: 'https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.'
  });

  Topic.create({
    name: 'algorithm',
    logo:
      'https://media.wired.com/photos/5af2249a0b975d475fa7afbf/master/pass/algorithms_landlord-FINAL.jpg'
  });

  Topic.create({
    name: 'coding',
    logo: 'https://cdn1.iconfinder.com/data/icons/seo-web-3/128/1-46-512.png'
  });
};

initializeTopics();

module.exports = initializeTopics;

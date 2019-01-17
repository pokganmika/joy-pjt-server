var Topic = require('../../models').Topic;

var initializeTopics = () => {
  Topic.create({
    name: 'javascript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  });

  Topic.create({
    name: 'node.js',
    image:
      'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
  });

  Topic.create({
    name: 'python',
    logl:
      'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
  });

  Topic.create({
    name: 'react',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png'
  });

  Topic.create({
    name: 'ruby',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/480px-Ruby_logo.svg.png'
  });

  Topic.create({
    name: 'git',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSFusff2muc5B3Qj-Vr0OaXdx5WnzsJBqD-5uNi6dTAOLQ-gBpA'
  });

  Topic.create({
    name: 'php',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/480px-PHP-logo.svg.png'
  });

  Topic.create({
    name: 'vue.js',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/300px-Vue.png'
  });

  Topic.create({
    name: 'angular',
    image: 'https://teamextension.es/dist/img/skills/angularjs_og.png'
  });

  Topic.create({
    name: 'blockchain',
    image: 'https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png'
  });

  Topic.create({
    name: 'android',
    image: 'https://www.android.com/static/2016/img/share/andy-lg.png'
  });

  Topic.create({
    name: 'css',
    image: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png'
  });

  Topic.create({
    name: 'django',
    image:
      'https://s3.amazonaws.com/clarityfm-production/attachments/6605/default/django.png?1442839704'
  });

  Topic.create({
    name: 'express',
    image:
      'https://cdn-images-1.medium.com/max/1200/1*EKW3XazCN98jcVrlEP3H8g.png'
  });

  Topic.create({
    name: 'aws',
    image:
      'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
  });

  Topic.create({
    name: 'mongodb',
    image:
      'https://cdn-images-1.medium.com/max/2000/1*Ta4qktHtO--RMUpnR08mBg.jpeg'
  });

  Topic.create({
    name: 'reactnative',
    image:
      'https://cdn-images-1.medium.com/max/1600/1*safAvjgR68qpQCreDTOcYA.png'
  });

  Topic.create({
    name: 'swift',
    image: 'https://developer.apple.com/swift/images/swift-og.png'
  });

  Topic.create({
    name: 'docker',
    image:
      'https://subicura.com/assets/article_images/2017-01-19-docker-guide-for-beginners-1/docker-logo.png'
  });

  Topic.create({
    name: 'typescript',
    image:
      'https://pbs.twimg.com/profile_images/743155381661143040/bynNY5dJ_400x400.jpg'
  });

  Topic.create({
    name: 'graphql',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2000px-GraphQL_Logo.svg.png'
  });

  Topic.create({
    name: 'apollo',
    image:
      'https://cdn-images-1.medium.com/max/1600/1*BIR94Q8MDPonvvFtsnUYLg.png'
  });

  Topic.create({
    name: 'redux',
    image:
      'https://camo.githubusercontent.com/77516f02a7fa8991a5d30524107a3d059701e6e5/68747470733a2f2f7261776769742e636f6d2f69537072696e672f626162656c2d7765627061636b2d72656163742d72656475782d7475746f7269616c732f6d61737465722f696d616765732f5265647578332e706e67'
  });

  Topic.create({
    name: 'mysql',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png'
  });

  Topic.create({ name: 'prisma', image: 'https://i.imgur.com/wD4rVt4.png' });

  Topic.create({
    name: 'html',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
  });

  Topic.create({
    name: 'jquery',
    image: 'https://cdn-images-1.medium.com/max/1600/0*g3ns8QALNBBH7CBA.'
  });

  Topic.create({
    name: 'algorithm',
    image:
      'https://media.wired.com/photos/5af2249a0b975d475fa7afbf/master/pass/algorithms_landlord-FINAL.jpg'
  });

  Topic.create({
    name: 'coding',
    image: 'https://cdn1.iconfinder.com/data/icons/seo-web-3/128/1-46-512.png'
  });

  Topic.create({
    name: 'functional',
    image:
      'http://blog.nofluffjuststuff.com/wp-content/uploads/2016/05/2000px-Lambda-logo.svg_-300x300.png'
  });
};

initializeTopics();

module.exports = initializeTopics;

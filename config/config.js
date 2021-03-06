require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    name: 'Joy @development',
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'joy',
    host: '127.0.0.1',
    SERVER_URL: 'http://localhost:5000',
    dialect: 'mysql',
    operatorsAliases: 'false',
    jwtPrivateKey: process.env.JWT_KEY,
    mongodb: 'mongodb://localhost/joy',
    STATIC_FILES: '/../../client-im09-prj-joy/build',
    requiresAuth: true
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    jwtPrivateKey: process.env.JWT_KEY
  },
  production: {
    name: 'Joy',
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'joy',
    host: '52.79.211.21',
    SERVER_URL: 'http://joy-learn.com',
    dialect: 'mysql',
    jwtPrivateKey: process.env.JWT_KEY,
    mongodb: `mongodb://${process.env.MONGO_USERNAME}:${
      process.env.MONGO_PASSWORD
    }@ds145563.mlab.com:45563/joy`,
    STATIC_FILES: '/../client/build',
    requiresAuth: true
  }
};

module.exports = config[env];

// mongodb: 'mongodb://joyusername:J0ypassw0rd@ds145563.mlab.com:45563/joy',

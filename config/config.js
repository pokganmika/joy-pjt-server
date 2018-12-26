require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'joy',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'joy',
    host: '52.79.211.21',
    dialect: 'mysql'
  }
};

const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
var createError = require('http-errors');
const config = require(__dirname + '/../config/config');

module.exports = function() {
  // Error
  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: 'uncaughtExceptions.log ' })
  );

  process.on('unhandledRejection', ex => {
    throw ex;
  });

  // Log
  winston.add(winston.transports.File, { filename: 'logfile.log' });
  winston.add(winston.transports.MongoDB, {
    db: config.mongodb,
    level: 'info'
  });
};

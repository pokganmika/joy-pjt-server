const winston = require('winston');
const mongoose = require('mongoose');
const passport = require('passport');
const passportConfig = require('../passport');
const sequelize = require('../models').sequelize;
const config = require(__dirname + '/../config/config');

module.exports = function() {
  sequelize.sync();
  passportConfig(passport);

  mongoose
    .connect(
      config.mongodb,
      { useNewUrlParser: true }
    )
    .then(() => winston.info('[+] Connected to MongoDB.'));

  if (!config.jwtPrivateKey) {
    console.error('[-] FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
  }
};

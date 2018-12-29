var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
const passport = require('passport');
var flash = require('connect-flash');
var path = require('path');
var createError = require('http-errors');
var cors = require('cors');

require('dotenv').config();
const config = require(__dirname + '/../config/config');

const indexRouter = require('../routes/index');
const sessionRouter = require('../routes/session');
const joyRouter = require('../routes/joy');
const dbRouter = require('../routes/db');
const pageRouter = require('../routes/page');
const error = require('../middleware/error');
// MySQL
const auth = require('../routes/auth');
const users = require('../routes/users');
// MongoDB
// const auth = require('../routes/auth.mongo');
// const users = require('../routes/users.mongo');

module.exports = function(app) {
  console.log(
    `[+] NODE_ENV = ${process.env.NODE_ENV}, PORT = ${process.env.PORT}`
  );
  console.log(`[+] STATIC_FILES = ${config.STATIC_FILES}`);

  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser(process.env.COOKIE_SECRET));
  app.use(
    expressSession({
      resave: true,
      saveUninitialized: true,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false
      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use(express.static(path.join(__dirname, config.STATIC_FILES)));
  app.use('/', pageRouter);
  app.use('/joy', joyRouter);
  app.use('/session', sessionRouter);
  app.use('/db', dbRouter);
  // MySQL
  app.use('/auth', auth);
  // MongoDB
  // app.use('/api/users', users);
  // app.use('/api/auth', auth);

  // Anything that doesn't match the above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.STATIC_FILES));
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(error);
};

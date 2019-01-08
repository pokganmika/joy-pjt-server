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
const config = require('../config/config');

const sessionRouter = require('../routes/session');
const joyRouter = require('../routes/joy');
const dbRouter = require('../routes/db');
const pageRouter = require('../routes/page');
const error = require('../middleware/error');
const topics = require('../routes/topics');
const lectures = require('../routes/lecture');
const instructors = require('../routes/instructors');
const topic = require('../routes/topic');
const lecture = require('../routes/lecture');
// MySQL
const auth = require('../routes/auth');
// MongoDB
// const auth = require('../routes/auth.mongo');
// const users = require('../routes/users.mongo');

module.exports = function (app) {
  console.log(
    `[+] NODE_ENV = ${process.env.NODE_ENV}, PORT = ${process.env.PORT}`
  );
  console.log(`[+] STATIC_FILES = ${config.STATIC_FILES}`);

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
        secure: false
      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, config.STATIC_FILES)));
  app.use(flash());
  app.use(cors());
  app.use('/', pageRouter);
  app.use('/joy', joyRouter);
  app.use('/session', sessionRouter);
  app.use('/db', dbRouter);

  // DB data
  app.use('/topics', topics);
  app.use('/lectures', lectures);
  app.use('/instructors', instructors);
  app.use('/t', topic);
  app.use('/l', lecture);

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
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(error);
};

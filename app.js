var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');
const passport = require('passport');
var flash = require('connect-flash');

require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config')[env];

const passportConfig = require('./passport');
var sequelize = require('./models').sequelize;
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var sessionRouter = require('./routes/session');
var users = require('./routes/users');
var joyRouter = require('./routes/joy');
var authRouter = require('./routes/auth.mysql');
var dbRouter = require('./routes/db');
var pageRouter = require('./routes/page');
var auth = require('./routes/auth');

console.log(
  `[+] NODE_ENV = ${process.env.NODE_ENV}, PORT = ${process.env.PORT}`
);
console.log(`[+] STATIC_FILES = ${config.STATIC_FILES}`);

var app = express();
sequelize.sync();
passportConfig(passport);

if (!config.jwtPrivateKey) {
  console.error('[-] FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

mongoose
  // .connect('mongodb://localhost/joy')
  .connect(config.mongodb)
  .then(() => console.log('[+] Connected to MongoDB.'))
  .catch(err => {
    console.log('[-] Could not connect to MongoDB.', err);
    process.exit(1);
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// app.use(express.static(path.join(__dirname, config.get('STATIC_FILES'))));
app.use(express.static(path.join(__dirname, config.STATIC_FILES)));

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/joy', joyRouter);
app.use('/session', sessionRouter);
app.use('/db', dbRouter);
app.use('/page', pageRouter);
app.use('/api/users', users);
app.use('/api/auth', auth);

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, config.get('STATIC_FILES')));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');
require('dotenv').config();
const config = require('config');
const passport = require('passport');
var flash = require('connect-flash');

const passportConfig = require('./passport');
var sequelize = require('./models').sequelize;

var indexRouter = require('./routes/index');
var sessionRouter = require('./routes/session');
var usersRouter = require('./routes/users');
var joyRouter = require('./routes/joy');
var authRouter = require('./routes/auth');
var dbRouter = require('./routes/db');
var pageRouter = require('./routes/page');

var app = express();
sequelize.sync();
passportConfig(passport);

console.log(
  `[+] NODE_ENV = ${process.env.NODE_ENV}, PORT = ${config.get('port')}`
);
console.log(`[+] STATIC_FILES = ${config.get('STATIC_FILES')}`);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
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
app.use(express.static(path.join(__dirname, config.get('STATIC_FILES'))));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/joy', joyRouter);
app.use('/session', sessionRouter);
app.use('/users', usersRouter);
app.use('/db', dbRouter);
app.use('/page', pageRouter);

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

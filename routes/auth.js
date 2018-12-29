const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Joi = require('joi');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');
const { generateAuthToken } = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log('[+] /auth/join : ', name, email, password);
  try {
    const exUser = await User.find({ where: { email } });
    if (exUser) {
      req.flash('joinError', 'This email was already registered.');
      return res.redirect('/auth/login');
    }

    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password: hash
    });

    console.log('[+] /auth/join : user = ', user);

    // const token = user.generateAuthToken();
    // res
    //   .header('x-auth-token', token)
    //   .header('access-control-expose-headers', 'x-auth-token')
    //   .send(_.pick(user, ['_id', 'name', 'email']));

    return res.redirect('/');
  } catch (error) {
    console.log('[-] /auth/join error occurred.', error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate(
    'local',
    { session: false },
    (authError, user, info) => {
      // console.log(
      //   '[*] /auth/login : passport.authenticate => ',
      //   authError,
      //   user,
      //   info
      // );
      if (authError) {
        console.error(authError);
        return next(authError);
      }
      if (!user) {
        req.flash('loginError', info.message);
        // return res.redirect('/');
        return res.status(400).send(info.message);
      }
      return req.login(user, loginError => {
        if (loginError) {
          return next(loginError);
        }
        // console.log('[+] /auth/login : user = ', user);

        const token = generateAuthToken(user);
        return res.json(token);
        // return res.redirect('/');
      });
    }
  )(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy9;
  res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;

/*
router.get('/signup', function(req, res, next) {
  res.send('/auth/signup');
});

router.get('/signin', function(req, res, next) {
  res.send('/auth/signin');
});

router.get('/signout', function(req, res, next) {
  // res.send('/auth/signout');
  if (req.session.user) {
    req.session.destroy(function(err) {
      console.log('[+] /auth/signout : destroyed sessions and sign-out.');
    });
    res.redirect('/auth/signin');
  } else {
    res.redirect('/auth/signin');
  }
});

module.exports = router;
*/

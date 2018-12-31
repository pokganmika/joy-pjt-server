const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Joi = require('joi');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');
const { generateAuthToken, validateUser } = require('../models/user');

const router = express.Router();

function validate(req) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
}

// Just added only for /auth?token={jwt}.
router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log('[+] /auth/join : ', name, email, password);
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      req.flash('joinError', 'This email was already registered.');
      // return res.redirect('/auth/login');
      return res.status(400).send('User already registered.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hash
    });
    console.log('[+] /auth/join : user = ', user);

    const token = generateAuthToken(user);
    res
      .header('x-auth-token', token)
      .header('access-control-expose-headers', 'x-auth-token')
      .send(_.pick(user, ['_id', 'name', 'email']));

    // return res.redirect('/');
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

        const token = generateAuthToken(user);
        res.send(token);

        // return res.redirect(`/?token=${token}`);

        // return (
        //   res
        //     .header('x-auth-token', token)
        //     .header('access-control-expose-headers', 'x-auth-token')
        //     // .send(_.pick(user, ['_id', 'name', 'email']));
        //     .json(token)
        // );

        // return res.redirect('/auth/social/token');

        // return res.json(token);
        // return res.redirect('/');
      });
    }
  )(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy;
  res.redirect('/');
});

router.get('/kakao', passport.authenticate('kakao'));

router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('/auth/social/token');
  }
);

router.get('/github', passport.authenticate('github'));

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    // res.redirect('/');
    res.redirect('/auth/social/token');
  }
);

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/auth/social/token');
  }
);

router.get(
  '/google',
  passport.authenticate('google', {
    scope: [
      'profile',
      'email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/auth/social/token');
  }
);

router.get('/social/token', (req, res) => {
  console.log('[+] /auth/social/token : user = ', req.user);
  const token = generateAuthToken(req.user);

  // return (
  //   res
  //     .header('x-auth-token', token)
  //     .header('access-control-expose-headers', 'x-auth-token')
  //     // .send(_.pick(req.user, ['id', 'name', 'email']));
  //     .json(token)
  // );

  res.redirect(`/auth?token=${token}`);

  // return res.json(token);
});

module.exports = router;

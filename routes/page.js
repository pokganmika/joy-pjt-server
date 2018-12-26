const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ user: req.user });
});

router.get('/profile', isLoggedIn, (req, res) => {
  res.send({ user: req.user });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.send({ user: req.user });
});

module.exports = router;

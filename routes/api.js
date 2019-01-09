const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const { User } = require('../models');
const router = express.Router();

router.get('/users/:userId', async (req, res, next) => {
  const user = await User.find({
    attributes: ['id', 'name', 'avatar', 'isAdmin'],
    where: { id: req.params.userId }
  });
  console.log(user);

  res.send({ user: user });
});

module.exports = router;

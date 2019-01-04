var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');

router.get('/', async function (req, res, next) {
  const topics = await Lecture.findAll();
  res.send(topics);
});

module.exports = router;

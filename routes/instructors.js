var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');

router.get('/', async function (req, res, next) {
  const topics = await Instructor.findAll();
  res.send(topics);
});

module.exports = router;

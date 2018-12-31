var express = require('express');
var router = express.Router();

const { Topic } = require('../models');

router.get('/', async function(req, res, next) {
  const topics = await Topic.findAll();
  res.send(topics);
});

module.exports = router;

var express = require('express');
var router = express.Router();

const { Topic } = require('../models');

router.get('/', async function(req, res, next) {
  /*
    let result = {};
  var count = 0;
  const topics = await Topic.findAll();
  console.log('[+] //////////// length = ', topics.length);
  topics.forEach(async topic => {
    count++;
    let counts = {};

    const instructors = await topic.getInstructors();
    counts['instructors'] = instructors.length;

    const lectures = await topic.getLectures();
    counts['lectures'] = lectures.length;

    result[topic.name] = counts;
    console.log(count, result);

    if (count === topics.length) res.send(result);
  */
  const topics = await Topic.findAll();
  res.send(topics);
});

module.exports = router;

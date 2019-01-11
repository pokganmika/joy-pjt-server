var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');
const { Lecture } = require('../models');
const { Topic } = require('../models');

router.get('/:topicId', async function (req, res, next) {
  const { topicId } = req.params;
  let result = {};

  let instructors = await Instructor.findAll({
    attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  });
  result['instructors'] = instructors;

  let lectures = await Lecture.findAll({
    attributes: ['name', 'url', 'screenshot', 'free', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  });
  result['lectures'] = lectures;

  res.send(result);
});

module.exports = router;

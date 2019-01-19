var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');
const { Lecture } = require('../models');
const { Topic } = require('../models');
const { Book } = require('../models');
const { Course } = require('../models');

router.get('/:topicId', async function (req, res, next) {
  const { topicId } = req.params;
  let result = {};

  let instructors = await Instructor.findAll({
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  });
  result['instructors'] = instructors;

  let lectures = await Lecture.findAll({
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  });
  result['lectures'] = lectures;

  const books = await Book.findAll({
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  });
  result['books'] = books;

  const courses = await Course.findAll({
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  });
  result['courses'] = courses;

  res.send(result);
});

module.exports = router;

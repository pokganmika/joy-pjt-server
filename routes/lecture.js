var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');
const { Instructor } = require('../models');
const { Comment } = require('../models');
const { Review } = require('../models');

router.get('/:lectureId', async function (req, res, next) {
  const { lectureId } = req.params;
  let result = {};

  const lecture = await Lecture.findAll({
    where: { name: lectureId }
  });

  result['lecture'] = lecture;

  const instructor = await Instructor.findAll({
    include: [
      {
        model: Lecture,
        where: { name: lectureId }
      }
    ]
  });
  result['instructor'] = instructor;

  const comments = await Comment.findAll({
    where: { lecture_name: lectureId }
  });
  result['comments'] = comments;

  const reviews = await Review.findAll({
    where: { lecture_name: lectureId }
  });
  result['reviews'] = reviews;

  res.send(result);
});

router.post('/', async (req, res, next) => {
  const { lecture } = req.body;

  const newLecture = await Lecture.create({
    name: lecture.name,
    url: lecture.url,
    image: lecture.image,
    free: lecture.free,
    lang: lecture.lang
  });
  newLecture.setTopics([lecture.topic]);
  res.send(newLecture);
});

module.exports = router;

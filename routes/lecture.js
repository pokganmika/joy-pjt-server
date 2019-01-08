var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');
const { Topic } = require('../models');

router.get('/:lectureId', async function (req, res, next) {
  const { lectureId } = req.params;

  Lecture.findAll({
    attributes: ['name', 'url', 'screenshot', 'free', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: lectureId }
      }
    ]
  }).then(lectures => {
    res.json(lectures);
  });
});

module.exports = router;

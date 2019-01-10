var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');
const { Instructor } = require('../models');

router.get('/:lectureId', async function (req, res, next) {
  const { lectureId } = req.params;
  let result = {};

  Lecture.findAll({
    where: { name: lectureId },
    attributes: ['name', 'url', 'screenshot', 'free', 'lang']
  }).then(lecture => {
    result['lecture'] = lecture;

    Instructor.findAll({
      attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang'],
      include: [
        {
          model: Lecture,
          where: { name: lectureId }
        }
      ]
    }).then(instructor => {
      result['instructor'] = instructor;

      res.send(result);
    });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');
const { Lecture } = require('../models');

router.get('/:instructorId', async function (req, res, next) {
  const { instructorId } = req.params;
  let result = {};

  Instructor.findAll({
    where: { name: instructorId },
    attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang']
  }).then(instructor => {
    result['instructor'] = instructor;

    console.log(instructor);

    Lecture.findAll({
      attributes: ['name', 'url', 'screenshot', 'free', 'lang'],
      include: [
        {
          model: Instructor,
          where: { name: instructorId }
        }
      ]
    }).then(lectures => {
      console.log(lectures);
      result['lectures'] = lectures;

      res.send(result);
    });
  });
});

module.exports = router;

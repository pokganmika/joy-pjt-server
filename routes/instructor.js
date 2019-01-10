var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');
const { Topic } = require('../models');

router.get('/:instructorId', async function(req, res, next) {
  const { instructorId } = req.params;

  Instructor.findAll({
    attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: instructorId }
      }
    ]
  }).then(instructors => {
    console.log(instructors);

    res.json(instructors);
  });
});

module.exports = router;

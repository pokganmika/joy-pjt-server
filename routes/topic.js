var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');
const { InstructorTopic } = require('../models');
const { Topic } = require('../models');

router.get('/:topicId', async function (req, res, next) {
  console.log('[+] //////////////', req.params.topicId);
  const { topicId } = req.params;

  Instructor.findAll({
    attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  }).then(instructors => {
    res.json(instructors);
  });
});

module.exports = router;

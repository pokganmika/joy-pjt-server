var express = require('express');
var router = express.Router();

const { Instructor } = require('../models');
const { Topic } = require('../models');

router.get('/:topicId', async function (req, res, next) {
  const { topicId } = req.params;
  let result = {};

  Instructor.findAll({
    attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  }).then(instructors => {
    result['instructors'] = instructors;

    res.send(result);
  });
});

module.exports = router;

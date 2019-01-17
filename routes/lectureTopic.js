var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');

const { Topic } = require('../models');

router.get('/:topicId', async function (req, res, next) {
  const { topicId } = req.params;
  let result = {};

  Lecture.findAll({
    attributes: ['name', 'url', 'image', 'free', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: topicId }
      }
    ]
  }).then(lectures => {
    result['lectures'] = lectures;

    res.send(result);
  });
});

module.exports = router;

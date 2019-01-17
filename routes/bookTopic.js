var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');
const { Instructor } = require('../models');
const { Book } = require('../models');
const { Topic } = require('../models');

router.get('/:bookId', async function (req, res, next) {
  const { bookId } = req.params;
  let result = {};

  const books = await Book.findAll({
    attributes: ['name', 'url', 'image', 'free', 'lang'],
    include: [
      {
        model: Topic,
        where: { name: bookId }
      }
    ]
  });
  result['books'] = books;
  res.send(result);
});

module.exports = router;

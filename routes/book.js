var express = require('express');
var router = express.Router();

const { Lecture } = require('../models');
const { Instructor } = require('../models');
const { Comment } = require('../models');
const { Review } = require('../models');
const { Book } = require('../models');

router.get('/:bookId', async function (req, res, next) {
  const bookId = decodeURIComponent(req.params.bookId);
  console.log('[+] /book/:bookId ', bookId);
  let result = {};

  const book = await Book.findAll({
    where: { name: bookId }
  });
  console.log('[+] /////////////// book = ', book);
  result['book'] = book;

  const instructor = await Instructor.findAll({
    include: [
      {
        model: Book,
        where: { name: bookId }
      }
    ]
  });
  result['instructor'] = instructor;

  const comments = await Comment.findAll({ where: { book_name: bookId } });
  result['comments'] = comments;

  const reviews = await Review.findAll({ where: { book_name: bookId } });
  result['reviews'] = reviews;

  res.send(result);
});

module.exports = router;

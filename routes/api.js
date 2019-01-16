const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const { Comment } = require('../models');
const { User } = require('../models');
const { Review } = require('../models');
const { Instructor } = require('../models');
const { Lecture } = require('../models');
const { Book } = require('../models');
const { ReviewInstructor } = require('../models');
const { ReviewLecture } = require('../models');

const router = express.Router();

var getReviewAverage = arrays => {
  let sum = 0;
  arrays.forEach(array => {
    sum += array.review;
  });
  return sum / arrays.length;
};

router.get('/users/:id', async (req, res, next) => {
  const user = await User.find({
    attributes: ['id', 'name', 'avatar', 'isAdmin'],
    where: { name: req.params.id }
  });
  console.log(user);

  res.send({ user: user });
});

router.post('/comment/:type/:name', (req, res) => {
  const { type, name } = req.params;
  console.log('[+] /api/:type/:name', type, name);

  console.log(req.body);

  if (type === 'instructor') {
    Comment.create({
      writer: req.body.writer,
      content: req.body.content,
      instructor_name: name
    }).then(comments => {
      res.send(comments);
    });
  } else if (type === 'lecture') {
    Comment.create({
      writer: req.body.writer,
      content: req.body.content,
      lecture_name: name
    }).then(comments => {
      res.send(comments);
    });
  } else if (type === 'book') {
    Comment.create({
      writer: req.body.writer,
      content: req.body.content,
      book_name: name
    }).then(comment => {
      res.send(comment);
    });
  }
});

router.post('/review/:type/:name', async (req, res) => {
  // const { type, name } = req.params;
  const name = decodeURIComponent(req.params.name);
  const type = decodeURIComponent(req.params.type);

  console.log('[+] /api/:type/:name', type, name);

  console.log(req.body);

  if (type === 'instructor') {
    const review = await Review.create({
      writer: req.body.writer,
      review: req.body.review,
      instructor_name: name
    });

    // Review update of instructor
    const reviews = await Review.findAll({
      where: { instructor_name: name }
    });

    const instructor = await Instructor.findOne({ where: { name: name } });
    instructor.review = getReviewAverage(reviews);
    await instructor.save();

    // Return previous review request result.
    res.send(review);
  } else if (type === 'lecture') {
    const review = await Review.create({
      writer: req.body.writer,
      review: req.body.review,
      lecture_name: name
    });

    // Review update of lecture
    const reviews = await Review.findAll({
      where: { lecture_name: name }
    });

    const lecture = await Lecture.findOne({ where: { name: name } });
    lecture.review = getReviewAverage(reviews);
    await lecture.save();

    // Return previous review request result.
    res.send(review);
  } else if (type === 'book') {
    const review = await Review.create({
      writer: req.body.writer,
      review: req.body.review,
      book_name: name
    });

    // Review update of instructor
    const reviews = await Review.findAll({
      where: {
        book_name: name
      }
    });

    const book = await Book.findOne({ where: { name: name } });
    book.review = getReviewAverage(reviews);
    await book.save();

    res.send(review);
  }
});

module.exports = router;

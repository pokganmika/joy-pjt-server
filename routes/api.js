const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const { Comment } = require('../models');
const { User } = require('../models');
const { Review } = require('../models');
const { Instructor } = require('../models');
const { Lecture } = require('../models');
const { ReviewInstructor } = require('../models');
const { ReviewLecture } = require('../models');

const router = express.Router();

router.get('/users/:name', async (req, res, next) => {
  const user = await User.find({
    attributes: ['name', 'name', 'avatar', 'isAdmin'],
    where: { name: req.params.name }
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

    res.send(review);
  } else if (type === 'lecture') {
    const review = await Review.create({
      writer: req.body.writer,
      review: req.body.review,
      lecture_name: name
    });

    // const reviews = await Review.findAll({ where: { lecture_name: name } });
    // console.log('[+] reviews = ', reviews);

    res.send(review);
  } else if (type === 'book') {
    const review = await Review.create({
      writer: req.body.writer,
      review: req.body.review,
      book_name: name
    });

    // const reviews = await Review.findAll({ where: { lecture_name: name } });
    // console.log('[+] reviews = ', reviews);

    res.send(review);
  }
});

module.exports = router;

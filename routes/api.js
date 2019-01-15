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
  }
  // .then(comment => {
  //   if (type === 'instructor') {
  //     comment.setInstructors([name]);
  //   } else if (type === 'lecture') {
  //     comment.setLectures([name]);
  //   }
  // });

  // res.send('ok');
});

router.post('/review/:type/:name', async (req, res) => {
  const { type, name } = req.params;
  console.log('[+] /api/:type/:name', type, name);

  console.log(req.body);

  if (type === 'instructor') {
    const review = await Review.create({
      writer: req.body.writer,
      review: req.body.review,
      instructor_name: name
    });

    const reviews = await Review.findAll({
      where: {
        instructor_name: name
      }
    });
    console.log('[+] reviews = ', reviews);

    res.send(reviews);
  } else if (type === 'lecture') {
  } else if (type === 'book') {
  }

  /*
  if (type === 'instructor') {
    ReviewInstructor.create({
      writer: req.body.writer,
      review: req.body.review,
      instructor_name: name
    }).then(reviewInstructor => {
      console.log(reviewInstructor);
      reviewInstructor.addUser(req.body.writer);
    });
  } else if (type === 'lecture') {
    // ReviewLecture.create({
    //   writer: req.body.writer,
    //   review: req.body.review,
    //   instructor_name: name
    // }).then(reviewLecture => {
    //   console.log(reviewLecture);
    //   reviewLecture.setUsers([req.body.writer]);
    // });
    User.findAll({ where: { name: req.body.writer } }).then(user => {
      user.setReviewLectures([req.body.review]);
    });
  }
*/

  /*
  if (type === 'instructor') {
    Instructor.findOne({
      where: {
        name: name
      }
    }).then(instructor => {
      console.log(instructor);
      instructor.addReviewInstructors([req.body.review]);
    });
  } else if (type === 'lecture') {
    Lecture.findOne({
      where: {
        name: name
      }
    }).then(lecture => {
      console.log(lecture);
    });
  }
  */

  // res.send('OK');
});

module.exports = router;

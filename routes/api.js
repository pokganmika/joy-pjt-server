const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const { Comment } = require('../models');
const { User } = require('../models');
const { Instructor } = require('../models');
const { Lecture } = require('../models');

const router = express.Router();

router.get('/users/:userId', async (req, res, next) => {
  const user = await User.find({
    attributes: ['id', 'name', 'avatar', 'isAdmin'],
    where: { id: req.params.userId }
  });
  console.log(user);

  res.send({ user: user });
});

router.post('/:type/:name', (req, res) => {
  const { type, name } = req.params;
  console.log('[+] /api/:type/:name', type, name);

  console.log(req.body);

  /*
  if (type === 'instructor') {
    Instructor.findAll({
      where: { name: name }
    }).then(instructor => {
      instructor.setComments({
        writer: req.body.writer,
        content: req.body.content
      });
    });
  } else if (type === 'lecture') {
  }
  */

  Comment.create({
    writer: req.body.writer,
    content: req.body.content,
    instructor_name: name
  });
  // .then(comment => {
  //   if (type === 'instructor') {
  //     comment.setInstructors([name]);
  //   } else if (type === 'lecture') {
  //     comment.setLectures([name]);
  //   }
  // });

  res.send('ok');
});

module.exports = router;

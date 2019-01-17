var express = require('express');
const Sequelize = require('sequelize');
var router = express.Router();

const { Instructor } = require('../models');
const { Lecture } = require('../models');
const { Comment } = require('../models');
const { Review } = require('../models');
const { User } = require('../models');
const { Book } = require('../models');
const { db } = require('../models');

// router.get('/', async function (req, res, next) {
//   const topics = await Instructor.findAll();
//   res.send(topics);
// });

router.get('/:instructorId', async function (req, res, next) {
  const { instructorId } = req.params;
  let result = {};

  let instructors = await Instructor.findAll({
    where: { name: instructorId }
    // attributes: ['name', 'fullName', 'gitHub', 'mainUrl', 'image', 'lang']
  });
  result['instructor'] = instructors;

  let comments = await Comment.findAll({
    where: {
      instructor_name: instructorId
    },
    include: [
      {
        model: User
      }
    ]
  });
  console.log(`[+] /instructor/${instructorId} : comment = `, comments);
  result['comments'] = comments;

  let lectures = await Lecture.findAll({
    // attributes: ['name', 'url', 'image', 'free', 'lang'],
    include: [
      {
        model: Instructor,
        where: { name: instructorId }
      }
    ]
  });
  result['lectures'] = lectures;

  const books = await Book.findAll({
    // attributes: ['name', 'url', 'image', 'free', 'lang'],
    include: [
      {
        model: Instructor,
        where: { name: instructorId }
      }
    ]
  });
  result['books'] = books;

  const reviews = await Review.findAll({
    where: { instructor_name: instructorId }
  });
  result['reviews'] = reviews;

  res.send(result);
});

/*
    Comment.findAll({
      where: {
        instructor_name: instructorId
      }
    })

      .then(comment => {
        result['comment'] = comment;

        Lecture.findAll({
          attributes: ['name', 'url', 'image', 'free', 'lang'],
          include: [
            {
              model: Instructor,
              where: { name: instructorId }
            }
          ]
        });
      })
      .then(lectures => {
        console.log(lectures);
        result['lectures'] = lectures;

        res.send(result);
      });
  });
});
*/

module.exports = router;

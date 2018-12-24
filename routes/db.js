var express = require('express');
var router = express.Router();
var User = require('../models').User;

router.get('/read', function(req, res, next) {
  User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
});

router.post('/write', function(req, res, next) {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  res.end('/db/write : OK');
});

module.exports = router;

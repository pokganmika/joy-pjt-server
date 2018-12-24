var express = require('express');
var router = express.Router();

router.get('/signup', function(req, res, next) {
  res.send('/auth/signup');
});

router.get('/signin', function(req, res, next) {
  res.send('/auth/signin');
});

router.get('/signout', function(req, res, next) {
  // res.send('/auth/signout');
  if (req.session.user) {
    req.session.destroy(function(err) {
      console.log('[+] /auth/signout : destroyed sessions and sign-out.');
    });
    res.redirect('/auth/signin');
  } else {
    res.redirect('/auth/signin');
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/showCookie', function(req, res) {
  res.send(req.cookies);
});

router.get('/setUserCookie', function(req, res) {
  res.cookie('user', {
    id: 'joy',
    name: 'joyName',
    authorized: true
  });

  res.redict('/session/showCookie');
});

router.get('/check', function(req, res) {
  if (req.session.user) {
    res.send('Session OK');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;

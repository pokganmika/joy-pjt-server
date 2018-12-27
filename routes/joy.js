var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

/* GET users listing. */
router.get('/', [auth, admin], function(req, res, next) {
  res.send('Only logged user can see this message.');
});

module.exports = router;

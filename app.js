var express = require('express');
var app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

module.exports = app;

const jwt = require('jsonwebtoken');

require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const configJS = require('../config/config')[env];

module.exports = function auth(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, configJS.jwtPrivateKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

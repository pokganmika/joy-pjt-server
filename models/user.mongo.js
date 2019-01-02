const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();
// const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateAuthToken = function () {
  console.log('[+] generateAuthToken :', this);
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
      name: this.name,
      email: this.email
    },
    config.jwtPrivateKey
  );
  return token;
};

const User = mongoose.model('User', userSchema);

function validateUser (user) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email({ minDomainAtoms: 2 }),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    isAdmin: Joi.boolean()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;

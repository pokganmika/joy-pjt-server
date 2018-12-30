const Joi = require('joi');
const config = require('../config/config');
const jwt = require('jsonwebtoken');

// module.exports = (sequelize, DataTypes) => {
var User = (sequelize, DataTypes) => {
  // TODO: email NULL case.
  //For facebook social login, the email is not provided if user resitricted his / her email.
  // In that case, email can be NULL.
  return sequelize.define(
    'user',
    {
      name: { type: DataTypes.STRING(255), allowNull: true },
      email: { type: DataTypes.STRING(100), allowNull: true },
      password: { type: DataTypes.STRING(255), allowNull: true },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      avatar: { type: DataTypes.BLOB('long'), allowNull: true },
      provider: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'local'
      },
      snsId: { type: DataTypes.STRING(255), allowNull: true }
    },
    {
      timestamp: true,
      paranoid: true,
      underscored: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  );
};

function generateAuthToken(user) {
  const token = jwt.sign(
    { id: user.id, isAdmin: user.isAdmin, name: user.name, email: user.email },
    config.jwtPrivateKey
  );
  return token;
}

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.generateAuthToken = generateAuthToken;
exports.validateUser = validateUser;

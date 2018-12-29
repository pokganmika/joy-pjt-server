const config = require('../config/config');
const jwt = require('jsonwebtoken');

// module.exports = (sequelize, DataTypes) => {
var User = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      name: { type: DataTypes.STRING(255), allowNull: true },
      email: { type: DataTypes.STRING(100), allowNull: false },
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

exports.User = User;
exports.generateAuthToken = generateAuthToken;

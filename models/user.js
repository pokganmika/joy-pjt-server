module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      name: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(100), allowNull: false },
      password: { type: DataTypes.STRING(255), allowNull: false },
      avatar: { type: DataTypes.BLOB('long'), allowNull: true }
    },
    { timestamp: true, paranoid: true, underscored: true }
  );
};

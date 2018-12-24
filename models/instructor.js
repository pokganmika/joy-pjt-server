module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      mainUrl: { type: DataTypes.STRING(255), allowNull: true },
      avatar: { type: DataTypes.BLOB('long'), allowNull: true }
    },
    { timestamp: true, paranoid: true, underscored: true }
  );
};

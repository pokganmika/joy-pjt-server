module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'lecture',
    {
      name: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(100), allowNull: false },
      password: { type: DataTypes.STRING(255), allowNull: false }
    },
    { timestamp: true, paranoid: true, underscored: true }
  );
};

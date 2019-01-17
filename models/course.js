module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'course',
    {
      name: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
      category: { type: DataTypes.STRING(255), allowNull: false },
      month: { type: DataTypes.INTEGER, allowNull: true }
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

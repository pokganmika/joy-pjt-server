module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'course',
    {
      title: {
        type: DataTypes.STRING(1000),
        primaryKey: true,
        allowNull: false
      },
      period: { type: DataTypes.INTEGER, allowNull: false }
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

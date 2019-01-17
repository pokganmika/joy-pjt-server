module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'courseunit',
    {
      name: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
      category: { type: DataTypes.STRING(255), allowNull: false },
      step: { type: DataTypes.INTEGER, allowNull: true },
      review: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
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

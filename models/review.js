module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'review',
    {
      writer: { type: DataTypes.STRING, allowNull: false },
      review: { type: DataTypes.INTEGER, allowNull: false }
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

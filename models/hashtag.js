module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'hashtag',
    {
      title: { type: DataTypes.STRING(255), allowNull: false, unique: true }
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

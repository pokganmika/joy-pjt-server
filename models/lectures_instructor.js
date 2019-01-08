module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'lectures_instructor',
    {},
    {
      timestamp: true,
      paranoid: true,
      underscored: true,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    }
  );
};

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'instructors_topic',
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

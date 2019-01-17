module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'topic',
    {
      name: { type: DataTypes.STRING(100), primaryKey: true, allowNull: false },
      image: { type: DataTypes.STRING(1024), allowNull: false }
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

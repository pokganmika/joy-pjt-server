module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'instructor',
    {
      name: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      gitHub: { type: DataTypes.STRING(255), allowNull: true },
      mainUrl: { type: DataTypes.STRING(255), allowNull: true },
      avatar: { type: DataTypes.STRING(255), allowNull: true }
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

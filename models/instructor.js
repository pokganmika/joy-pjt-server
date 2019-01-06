module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'instructor',
    {
      name: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      gitHub: { type: DataTypes.STRING(255), allowNull: true },
      mainUrl: { type: DataTypes.STRING(255), allowNull: true },
      avatar: { type: DataTypes.STRING(255), allowNull: true },
      lang: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'eng'
      }
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

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      nick: { type: DataTypes.STRING(255), allowNull: false, unique: true },
      email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(255), allowNull: true },
      avatar: { type: DataTypes.BLOB('long'), allowNull: true },
      provider: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'local'
      },
      snsId: { type: DataTypes.STRING(255), allowNull: true }
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

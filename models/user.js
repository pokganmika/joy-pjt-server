module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      name: { type: DataTypes.STRING(255), allowNull: false },
      email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(255), allowNull: false },
      avatar: { type: DataTypes.BLOB('long'), allowNull: true },
      provider: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'local'
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

module.exports = (sequelize, DataTypes) => {
  // var User = (sequelize, DataTypes) => {
  // TODO: email NULL case.
  // For facebook social login, the email is not provided if user resitricted his / her email.
  // In that case, email can be NULL.
  return sequelize.define(
    'user',
    {
      name: { type: DataTypes.STRING(255), primaryKey: true, allowNull: true },
      fullName: { type: DataTypes.STRING(255), allowNull: true },
      email: { type: DataTypes.STRING(100), allowNull: true },
      password: { type: DataTypes.STRING(255), allowNull: true },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      avatar: { type: DataTypes.STRING(3072), allowNull: true },
      provider: {
        type: DataTypes.STRING(100),
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

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'lecture',
    {
      title: { type: DataTypes.STRING(1000), allowNull: false },
      url: { type: DataTypes.STRING(1000), allowNull: false },
      name: { type: DataTypes.STRING(255), allowNull: false },
      screenshot: { type: DataTypes.BLOB('long'), allowNull: true },
      free: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
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

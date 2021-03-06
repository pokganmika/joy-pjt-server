module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'book',
    {
      name: { type: DataTypes.STRING(255), primaryKey: true, allowNull: false },
      url: { type: DataTypes.STRING(1000), allowNull: false },
      image: { type: DataTypes.STRING(255), allowNull: true },
      free: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
      lang: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'eng'
      },
      review: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 }
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

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ContectList",
    {
      isFavorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

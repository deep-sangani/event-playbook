module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "UserContact",
    {
      isFavorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "UserContact",
      timestamps: true,
    }
  );
};

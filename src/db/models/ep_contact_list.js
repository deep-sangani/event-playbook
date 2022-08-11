module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ContactList",
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

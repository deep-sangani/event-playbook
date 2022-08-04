module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileMediaId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      preferredLanguage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

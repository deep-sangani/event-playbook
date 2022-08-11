module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Registration",
    {
      registrationId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      registrationType: {
        type: DataTypes.ENUM,
        values: ["MANUAL", "GOOGLE ", "APPLE"],
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};

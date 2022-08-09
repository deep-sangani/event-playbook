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
        type: DataTypes.ENUM("MANUAL", "GOOGLE", "APPLE"),
        allowNull: false,
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

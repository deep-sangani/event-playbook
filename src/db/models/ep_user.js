const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  const ep_user = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
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
      registrationId: {
        type: DataTypes.UUID,
        reference: {
          model: "Registration",
          key: "registrationId",
        },
      },
      contactId: {
        type: DataTypes.UUID,
        reference: {
          model: "Contact",
          key: "contactId",
        },
      },
    },
    {
      timestamps: true,
    }
  );

  ep_user.associate = (models) => {
    ep_user.hasOne(models.Registration);
    ep_user.hasOne(models.Contact);
  };

  return ep_user;
};

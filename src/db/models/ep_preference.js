module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Preference",
    {
      preferenceId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      allowNotifications: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      allowPrivateMessage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      allowGlobalSearch: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

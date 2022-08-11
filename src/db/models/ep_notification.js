module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Notification",
    {
      notificationId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isPrivateMessage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isSendAll: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userNotificationList: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "NotificationReply",
    {
      notificationReplyId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      replyMessage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

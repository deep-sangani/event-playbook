module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ActivityTrack",
    {
      eventInvitationId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

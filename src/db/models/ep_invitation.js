module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Invitation",
    {
      invitationId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },

      isSent: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

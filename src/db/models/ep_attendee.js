module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Attendee",
    {
      attendeeId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("ACCEPTED", "BLOCKED", "DECLINED", "WAITING"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

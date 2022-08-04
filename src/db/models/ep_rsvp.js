module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Rsvp",
    {
      rsvpId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      rsvpName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

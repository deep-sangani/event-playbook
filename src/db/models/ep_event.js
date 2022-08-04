module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Event",
    {
      eventId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      inviteAttendees: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isFreeEvent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      allowMedia: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      bannerMediaId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      eventPhotosMediaIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

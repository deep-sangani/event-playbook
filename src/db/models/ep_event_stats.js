module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "EventStats",
    {
      eventStatsId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      trackCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activityCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attendeeCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      archiveDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "ActivityTrack",
    {
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      allowMedia: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      activityTrackPhotosMediaIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

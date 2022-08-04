module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Activity",
    {
      activityId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      activityDate: {
        type: DataTypes.DATE,
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
      description: {
        type: DataTypes.STRING,
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

      trackPhotosMediaIds: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

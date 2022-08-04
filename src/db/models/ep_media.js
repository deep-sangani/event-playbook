module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Media",
    {
      mediaId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      storageLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

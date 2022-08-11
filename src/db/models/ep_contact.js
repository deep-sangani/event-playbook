module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Contact",
    {
      contactId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      link: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

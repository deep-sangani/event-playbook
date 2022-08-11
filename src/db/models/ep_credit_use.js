module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "CreditUse",
    {
      creditUseId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      creditUsed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      previousCredits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      newCredits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

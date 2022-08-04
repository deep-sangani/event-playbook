module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "UserCreditsSummary",
    {
      availableCredits: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      totalCreditsPurchased: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      totalCreditsUsed: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

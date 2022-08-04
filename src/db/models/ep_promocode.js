module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "PromoCode",
    {
      promoCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      isUnlimitedSingleEvent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isDiscountedPrice: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      discountedPrice: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      discountedPercentage: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      creditMax: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      isOneAndDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isIdentifiedUserOnly: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      expiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      creditExpireInDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "CreditPurchase",
    {
      creditPurchaseId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      purchasePrice: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      discountedPrice: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      promoCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiryDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isRefunded: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isCancelled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      previousCredits: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      newCredits: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

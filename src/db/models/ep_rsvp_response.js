module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "RsvpQuestion",
    {
      rsvpResId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      selectedAnswer: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },

      typedAnswer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

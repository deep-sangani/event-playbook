module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "RsvpQuestion",
    {
      rsvpQuestionId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answers: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      isMultiSelect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      allowTyped: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

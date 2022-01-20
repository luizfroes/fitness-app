const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ExerciseRoutine extends Model {}

ExerciseRoutine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "routine",
        key: "id",
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "exercise",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "exercise_routine",
  }
);

module.exports = ExerciseRoutine;

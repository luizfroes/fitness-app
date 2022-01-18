const User = require("./User");
const Exercise = require("./Exercise");
const Routine = require("./Routine");
const UserRoutine = require("../models/UserRoutine");
const ExerciseRoutine = require("./ExerciseRoutine");

User.hasMany(Routine, {
  foreignKey: "user_id",
});

Routine.belongsTo(User, {
  foreignKey: "user_id",
});

Routine.belongsToMany(Exercise, {
  through: { model: ExerciseRoutine, foreignKey: "routine_id" },
});

Exercise.belongsToMany(Routine, {
  through: { model: ExerciseRoutine, foreignKey: "exercise_id" },
});

module.exports = {
  Routine,
  Exercise,
  ExerciseRoutine,
  UserRoutine,
  User,
};

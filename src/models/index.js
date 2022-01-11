const Users = require("../models/Users");
const Exercises = require("../models/Exercises");
const Routines = require("../models/Routines");
const UserRoutine = require("../models/UserRoutine");
const ExerciseRoutine = require("./ExerciseRoutine");

Users.hasMany(Routines, {
  foreignKey: "user_id",
});

Routines.belongsTo(Users, {
  foreignKey: "user_id",
});

Routines.belongsToMany(Exercises, {
  through: { model: ExerciseRoutine, foreignKey: "routine_id" },
});

Exercises.belongsToMany(Routines, {
  through: { model: ExerciseRoutine, foreignKey: "exercise_id" },
});

module.exports = {
  Routines,
  Exercises,
  ExerciseRoutine,
  UserRoutine,
  Users,
};

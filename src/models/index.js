const Users = require("../models/Users");
const Exercises = require("../models/Exercises");
const Routines = require("../models/Routines");
const UserRoutine = require("../models/UserRoutine");

Users.hasMany(Routines, {
    through: {
        model: UserRoutine,
        foreignKey: "user_id",
    },
});

Routines.belongsTo(Users, {
    through: {
        model: UserRoutine,
        foreignKey: "routine_id",
    },
});

Routines.hasMany(Exercises, {
    foreignKey: "exercise_id",
});
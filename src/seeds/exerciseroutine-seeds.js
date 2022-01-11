const ExerciseRoutine = require("../models/ExerciseRoutine");

const exerciseRoutineData = [{
        exercise_id: 1,
        routine_id: 5,
    },
    {
        exercise_id: 1,
        routine_id: 3,
    },
    {
        exercise_id: 1,
        routine_id: 4,
    },
    {
        exercise_id: 2,
        routine_id: 4,
    },
    {
        exercise_id: 3,
        routine_id: 1,
    },
    {
        exercise_id: 3,
        routine_id: 3,
    },
    {
        exercise_id: 3,
        routine_id: 4,
    },
    {
        exercise_id: 3,
        routine_id: 5,
    },
    {
        exercise_id: 4,
        routine_id: 1,
    },
    {
        exercise_id: 4,
        routine_id: 2,
    },
    {
        exercise_id: 4,
        routine_id: 3,
    },
    {
        exercise_id: 5,
        routine_id: 3,
    },
];

const seedExerciseRoutine = () =>
    ExerciseRoutine.bulkCreate(exerciseRoutineData);

module.exports = seedExerciseRoutine;
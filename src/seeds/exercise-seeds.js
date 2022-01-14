const { Exercise } = require("../models");

const exerciseData = [{
        exercise_name: "run",
        type: "cardio",
        description: "Put one foot in front of the other, switch, repeat",
        target: "legs",
    },
    {
        exercise_name: "jump",
        type: "cardio",
        description: "Just keep bouncing",
        target: "legs",
    },
    {
        exercise_name: "lift stuff",
        type: "muscle",
        description: "Pick up heavy objects",
        target: "arms",
    },
    {
        exercise_name: "hammer throw",
        type: "muscle",
        description: "throw a hammer",
        target: "arms",
    },
    {
        exercise_name: "skipping",
        type: "cardio",
        description: "swing a rope around yourself",
        target: "legs",
    },
    {
        exercise_name: "sitting",
        type: "rest",
        description: "have a break, have a kitkat",
        target: "belly",
    },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;
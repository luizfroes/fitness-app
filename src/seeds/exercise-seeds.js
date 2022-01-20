const { Exercise } = require("../models");

const exerciseData = [
  {
    exercise_name: "run",
    image: "http://d205bpvrqc9yn1.cloudfront.net/0230.gif",
    target: "legs",
  },
  {
    exercise_name: "jump",
    image: "http://d205bpvrqc9yn1.cloudfront.net/0230.gif",
    target: "legs",
  },
  {
    exercise_name: "lift stuff",
    image: "http://d205bpvrqc9yn1.cloudfront.net/0230.gif",
    target: "arms",
  },
  {
    exercise_name: "hammer throw",
    image: "http://d205bpvrqc9yn1.cloudfront.net/0230.gif",
    target: "arms",
  },
  {
    exercise_name: "skipping",
    image: "http://d205bpvrqc9yn1.cloudfront.net/0230.gif",
    target: "legs",
  },
  {
    exercise_name: "sitting",
    image: "http://d205bpvrqc9yn1.cloudfront.net/0230.gif",
    target: "belly",
  },
];

const seedExercises = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercises;

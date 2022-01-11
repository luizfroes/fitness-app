const Routines = require("../models/Routines");

routineData = [
  {
    date: 1 / 1 / 22,
    time_start: 1.0,
    time_end: 2.0,
    exercise_id: [1, 2, 3],
  },
  {
    date: 2 / 1 / 22,
    time_start: 2.0,
    time_end: 3.3,
    exercise_id: [2, 3],
  },
  {
    date: 1 / 1 / 22,
    time_start: 5.0,
    time_end: 6.0,
    exercise_id: [4, 2, 1],
  },
  {
    date: 8 / 1 / 22,
    time_start: 3.0,
    time_end: 4.0,
    exercise_id: [3],
  },
  {
    date: 5 / 1 / 22,
    time_start: 1.0,
    time_end: 2.0,
    exercise_id: [5, 6],
  },
];

const seedRoutines = () => Routines.bulkCreate(routineData);

module.exports = seedRoutines;

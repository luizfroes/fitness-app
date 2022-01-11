const UserRoutine = require("../models/UserRoutine");

const userRoutineData = [
  {
    user_id: 1,
    routine_id: 5,
  },
  {
    user_id: 1,
    routine_id: 3,
  },
  {
    user_id: 1,
    routine_id: 4,
  },
  {
    user_id: 2,
    routine_id: 4,
  },
  {
    user_id: 3,
    routine_id: 1,
  },
  {
    user_id: 3,
    routine_id: 3,
  },
  {
    user_id: 3,
    routine_id: 4,
  },
  {
    user_id: 3,
    routine_id: 5,
  },
  {
    user_id: 4,
    routine_id: 1,
  },
  {
    user_id: 4,
    routine_id: 2,
  },
  {
    user_id: 4,
    routine_id: 3,
  },
  {
    user_id: 5,
    routine_id: 3,
  },
];

const seedUserRoutine = () => UserRoutine.bulkCreate(userRoutineData);

module.exports = seedUserRoutine;

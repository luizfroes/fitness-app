require("dotenv").config();
const sequelize = require("../config/connection");
const seedUsers = require("./users-seeds");
const seedExercises = require("./exercise-seeds");
const seedRoutines = require("./routine-seeds");
const seedUserRoutine = require("./userroutine-seeds");
const seedExerciseRoutine = require("./exerciseroutine-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedExercises();
  console.log("\n----- EXERCISES SEEDED -----\n");

  await seedRoutines();
  console.log("\n----- ROUTINES SEEDED -----\n");

  // await seedUserRoutine();
  // console.log("\n----- USER ROUTINES SEEDED -----\n");

  await seedExerciseRoutine();
  console.log("\n----- EXERCISE ROUTINES SEEDED -----\n");

  process.exit(0);
};

seedAll();

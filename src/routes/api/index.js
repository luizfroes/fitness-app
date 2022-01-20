const { Router } = require("express");

const {
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
  getAllRoutines,
  getRoutineById,
  getExercisesByTarget,
  createExercise,
} = require("../../controllers/api");

const router = Router();

router.get("/exercise/:target", getExercisesByTarget);

router.post("/exercise", createExercise);

router.get("/routines", getAllRoutines);
router.get("/routines/:id", getRoutineById);
router.post("/routines", createNewRoutine);
router.put("/routines/:id", updateRoutineById);
router.delete("/routines/:id", deleteRoutineById);

// router.post("/exercises", createNewRoutine);
// router.put("/routines/:id", updateRoutineById);
// router.delete("/routines/:id", deleteRoutineById);

module.exports = router;

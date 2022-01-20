const { Router } = require("express");

const {
  renderLogout,
  renderRoutine,
  renderExercises,
  renderExercise,
  renderDashboard,
  renderExerciseByTarget,
  renderCreateRoutine,
} = require("../../controllers/view/private");

const router = Router();

router.get("/dashboard", renderDashboard);
// router.get("/routines", renderRoutines);
router.get("/routines/:id", renderRoutine);
// router.get("/exercises", renderExercises);

router.get("/exercises/:target", renderExerciseByTarget);

// router.get("/exercises/:id", renderExercise);
router.get("/create-routine", renderCreateRoutine);
router.get("/logout", renderLogout);

module.exports = router;

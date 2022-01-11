const { Router } = require("express");

const {
  renderDashboard,
  renderLogout,
} = require("../../controllers/view/private");

const router = Router();

router.get("/routines", renderRoutines);
router.get("/routines/:id", renderRoutine);
router.get("/exercises", renderExercises);
router.get("/exercises/:id", renderExercise);
router.get("/logout", renderLogout);

module.exports = router;

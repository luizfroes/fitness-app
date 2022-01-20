const { Router } = require("express");

const {
  renderLogin,
  renderSignUp,
  renderHome,
  renderRoutines,
  renderRoutine,
  renderExercises,
  renderExercise,
} = require("../../controllers/view/public");

const router = Router();

router.get("/login", renderLogin);
router.get("/sign-up", renderSignUp);
router.get("/", renderHome);
router.get("/routines", renderRoutines);
router.get("/routines/:id", renderRoutine);
router.get("/exercises", renderExercises);
router.get("/exercises/:id", renderExercise);

module.exports = router;

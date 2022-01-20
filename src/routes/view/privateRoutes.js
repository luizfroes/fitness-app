const { Router } = require("express");

const {
    renderRoutines,
    renderLogout,
    renderRoutine,
    renderExercises,
    renderExercise,
    renderDashboard,
    renderCreateRoutine,
} = require("../../controllers/view/private");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/create-routine", renderCreateRoutine);
router.get("/routines", renderRoutines);
router.get("/routines/:id", renderRoutine);
router.get("/exercises", renderExercises);
router.get("/exercises/:id", renderExercise);
router.get("/logout", renderLogout);

module.exports = router;
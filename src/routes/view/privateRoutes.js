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
router.get("/create-routine", renderCreateRoutine);
router.get("/logout", renderLogout);

module.exports = router;
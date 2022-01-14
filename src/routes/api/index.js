const { Router } = require("express");

const {
    createNewRoutine,
    updateRoutineById,
    deleteRoutineById,
    getAllRoutines,
    getRoutineById,
} = require("../../controllers/api");

const router = Router();

router.get("/routines", getAllRoutines);
router.get("/routines/:id", getRoutineById);
router.post("/routines", createNewRoutine);
router.put("/routines/:id", updateRoutineById);
router.delete("/routines/:id", deleteRoutineById);

// router.post("/exercises", createNewRoutine);
// router.put("/routines/:id", updateRoutineById);
// router.delete("/routines/:id", deleteRoutineById);

module.exports = router;
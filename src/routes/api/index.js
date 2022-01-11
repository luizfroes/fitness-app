const { Router } = require("express");

const {
  login,
  signup,
  logout,
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
} = require("../../controllers/api");

const router = Router();

router.post("/routines", createNewRoutine);
router.put("/routines/:id", updateRoutineById);
router.delete("/routines/:id", deleteRoutineById);

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

module.exports = router;

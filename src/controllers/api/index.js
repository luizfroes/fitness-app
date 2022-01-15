const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");

const createNewRoutine = async (req, res) => {
  res.send("createNewRoutine");
};

const updateRoutineById = async (req, res) => {
  res.send("updateRoutineById");
};

const deleteRoutineById = async (req, res) => {
  res.send("deleteRoutineById");
};

const getAllRoutines = async (req, res) => {
  const routines = await Routine.findAll({
    include: [
      {
        model: Exercise,
        through: ExerciseRoutine,
      },
      {
        model: User,
      },
    ],
  });

  const allRoutines = routines.map((each) => {
    return each.get({
      plain: true,
    });
  });

  res.json({ data: allRoutines });
};

const getRoutineById = async (req, res) => {
  res.send("getRoutineById");
};

module.exports = {
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
  getRoutineById,
  getAllRoutines,
};

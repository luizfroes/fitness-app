const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");
const axios = require("axios").default;

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

  return allRoutines;
  // res.json({ data: allRoutines });
  //res.send("getAllRoutines");
};

const getRoutinesByUser = async (req, res) => {
  const { user } = req.session;
  console.log(req.session);
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
    where: { user_id: user.id },
  });

  const allRoutines = routines.map((each) => {
    return each.get({
      plain: true,
    });
  });

  return allRoutines;
};

const getRoutineById = async (req, res) => {
  res.send("getRoutineById");
};

const getExercisesByTarget = async (req, res) => {
  console.log(req);
  const URL = `https://exercisedb.p.rapidapi.com/exercises/target/${req}`;

  const { data } = await axios.get(URL, {
    headers: {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
    },
  });

  const shuffled = data.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  console.log(selected);

  return selected;
};

const createExercise = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["exercise_name", "image", "target"],
      req.body
    );

    if (Object.keys(payload).length !== 3) {
      return res.status(400).json({ error: "Please provide a valid request" });
    }

    const exercise = await Exercise.create(payload);
    return res.json(exercise);
  } catch (err) {
    console.log(`[ERROR]: Failed to create exercise | ${error.message}`);
    return res.status(500).json({ error: "Failed to create exercise" });
  }
};

module.exports = {
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
  getRoutineById,
  getAllRoutines,
  getExercisesByTarget,
  getRoutinesByUser,
  createExercise,
};

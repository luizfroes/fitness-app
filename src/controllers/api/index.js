const axios = require("axios").default;
const { Routines, Exercises, ExerciseRoutine, Users } = require("../../models");

const login = async (req, res) => {
  res.send("login");
};

const signup = async (req, res) => {
  res.send("signup");
};

const logout = async (req, res) => {
  res.send("logout");
};

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
  const routines = await Routines.findAll({
    include: [
      {
        model: Exercises,
        through: ExerciseRoutine,
      },
      {
        model: Users,
      },
    ],
  });

  const allRoutines = routines.map((each) => {
    return each.get({
      plain: true,
    });
  });

  res.json({ data: allRoutines });
  //res.send("getAllRoutines");
};

const getRoutineById = async (req, res) => {
  res.send("getRoutineById");
};

const getExercisesByTarget = async (req, res) => {
  // console.log(req.params.target);
  const URL = `https://exercisedb.p.rapidapi.com/exercises/target/${req.params.target}`;

  const { data } = await axios.get(URL, {
    headers: {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
    },
  });

  const shuffled = data.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  console.log(selected);

  res.json({ selected });
};

module.exports = {
  getExercisesByTarget,
  login,
  signup,
  logout,
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
  getRoutineById,
  getAllRoutines,
};

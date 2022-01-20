const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");

const renderLogin = (req, res) => {
  res.render("login");
};

const renderHome = (req, res) => {
  const { loggedIn } = req.session;
  res.render("home", { loggedIn });
};

const renderSignUp = (req, res) => {
  res.render("signup");
};

const renderRoutines = async (req, res) => {
  const { loggedIn } = req.session;

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
  console.log(allRoutines);
  res.render("routines", { loggedIn, allRoutines });
};

const renderRoutine = async (req, res) => {
  const { loggedIn, id } = req.session;

  const routineData = await Routine.findByPk(req.params.id, {
    include: [
      {
        model: Exercise,
        through: ExerciseRoutine,
      },
      {
        model: User,
      },
    ],
  }).catch((err) => {
    res.json(err);
  });

  const routine = routineData.get({ plain: true });
  console.log(routine);
  res.render("routine", { loggedIn, routine, id });
};

const renderExercises = async (req, res) => {
  res.render("exercises");
};

const renderExercise = async (req, res) => {
  res.send("renderExercise");
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignUp,
  renderExercise,
  renderExercises,
  renderRoutine,
  renderRoutines,
};

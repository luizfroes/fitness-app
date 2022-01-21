const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");
const { getExercisesByTarget, getRoutinesByUser } = require("../api");

const renderLogin = (req, res) => {
  res.render("login");
};

const renderHome = (req, res) => {
  const { loggedIn } = req.session;

  const { firstName, lastName } = req.session.user;

  return res.render("home", { loggedIn, firstName, lastName });
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
  res.render("routine", { loggedIn, routine, id });
};

const renderExercises = async (req, res) => {
  res.render("exercises");
};

const renderExercise = async (req, res) => {
  //   console.log(req.params.target);
  const selected = await getExercisesByTarget(req.params.target);
  //   console.log(selected);
  //   console.log(req.session);
  const routines = await getRoutinesByUser(req);
  res.render("exercises", { selected, routines });
};

const renderExerciseByTarget = async (req, res) => {
  //   console.log(req.params.target);
  const selected = await getExercisesByTarget(req.params.target);
  //   console.log(selected);
  //   console.log(req.session);
  const routines = await getRoutinesByUser(req);
  res.render("exercises", { selected, routines });
};

module.exports = {
  renderHome,
  renderLogin,
  renderSignUp,
  renderExercise,
  renderExercises,
  renderRoutine,
  renderRoutines,
  renderExerciseByTarget,
};

const {
  getExercisesByTarget,
  getAllRoutines,
  getRoutinesByUser,
} = require("../api");

const { getCurrentWeather, getQuote } = require("../../utils");

const renderDashboard = async (req, res) => {
  const { user } = req.session;
  const weather = await getCurrentWeather(user.location);
  const weatherIcon = weather.weather[0].icon;

  const quote = await getQuote();
  return res.render("dashboard", { weather, weatherIcon, quote });
};

const renderRoutines = async (req, res) => {
  res.render("routines");
};

const renderRoutine = async (req, res) => {
  res.send("renderRoutine");
};

const renderExerciseByTarget = async (req, res) => {
  //   console.log(req.params.target);
  const selected = await getExercisesByTarget(req.params.target);
  //   console.log(selected);
  //   console.log(req.session);
  const routines = await getRoutinesByUser(req);
  res.render("exercises", { selected, routines });
};

const renderExercises = async (req, res) => {
  res.render("exercises");
};

const renderExercise = async (req, res) => {
  res.send("renderExercise");
};

const renderLogout = async (req, res) => {
  res.render("logout");
};

module.exports = {
  renderLogout,
  renderRoutines,
  renderRoutine,
  renderExercises,
  renderExercise,
  renderDashboard,
  renderExerciseByTarget,
};

const { getExercisesByTarget } = require("../api");

const renderDashboard = async (req, res) => {
  res.render("dashboard");
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
  console.log(selected);
  res.render("exercises", { selected });
};

const renderExercises = async (req, res) => {
  res.render("exercises");
};

const renderExercise = async (req, res) => {
  res.send("renderExercise");
};

const renderLogout = async (req, res) => {
  res.send("renderLogout");
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

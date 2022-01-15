const renderLogin = (req, res) => {
  res.render("login");
};

const renderHome = (req, res) => {
  //   const { loggedIn } = req.session;
  res.render("home");
};

const renderSignUp = (req, res) => {
  res.render("signup");
};

const renderRoutines = async (req, res) => {
  res.render("routines");
};

const renderRoutine = async (req, res) => {
  res.send("renderRoutine");
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

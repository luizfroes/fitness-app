const renderRoutines = async (req, res) => {
  res.send("renderRoutines");
};

const renderRoutine = async (req, res) => {
  res.send("renderRoutine");
};

const renderExercises = async (req, res) => {
  res.send("renderExercises");
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
};

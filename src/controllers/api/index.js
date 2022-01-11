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

module.exports = {
  login,
  signup,
  logout,
  createNewRoutine,
  updateRoutineById,
  deleteRoutineById,
};

const renderDashboard = async(req, res) => {
    res.render("dashboard");
};

const renderRoutines = async(req, res) => {
    res.render("routines");
};

const renderRoutine = async(req, res) => {
    res.send("renderRoutine");
};

const renderExercises = async(req, res) => {
    res.render("exercises");
};

const renderExercise = async(req, res) => {
    res.send("renderExercise");
};

const renderLogout = async(req, res) => {
    res.send("renderLogout");
};

module.exports = {
    renderLogout,
    renderRoutines,
    renderRoutine,
    renderExercises,
    renderExercise,
    renderDashboard,
};
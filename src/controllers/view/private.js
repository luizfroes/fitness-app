const { getCurrentWeather } = require("../../utils");

const renderDashboard = async(req, res) => {
    const { user } = req.session;
    const weather = await getCurrentWeather(user.location);
    console.log(weather);
    const weatherIcon = weather.weather[0].icon;
    return res.render("dashboard", { weather, weatherIcon });
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
    res.render("logout");
};

module.exports = {
    renderLogout,
    renderRoutines,
    renderRoutine,
    renderExercises,
    renderExercise,
    renderDashboard,
};
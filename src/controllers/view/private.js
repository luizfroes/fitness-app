const { getCurrentWeather, getQuote } = require("../../utils");

const { Routine, ExerciseRoutine, Exercise } = require("../../models");

const renderDashboard = async(req, res) => {
    const { user } = req.session;
    const weather = await getCurrentWeather(user.location);
    const weatherIcon = weather.weather[0].icon;

    const quote = await getQuote();

    const routines = await Routine.findAll({
        where: {
            user_id: user.id,
        },
        include: { model: Exercise, through: ExerciseRoutine },
    });

    const allRoutines = routines.map((each) => {
        return each.get({
            plain: true,
        });
    });

    return res.render("dashboard", {
        weather,
        weatherIcon,
        quote,
        allRoutines,
    });
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

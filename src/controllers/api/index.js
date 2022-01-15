const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");

const createNewRoutine = async(req, res) => {
    res.send("createNewRoutine");
};

const updateRoutineById = async(req, res) => {
    res.send("updateRoutineById");
};

const deleteRoutineById = async(req, res) => {
    res.send("deleteRoutineById");
};

const getAllRoutines = async(req, res) => {
    const routines = await Routines.findAll({
        include: [{
                model: Exercises,
                through: ExerciseRoutine,
            },
            {
                model: Users,
            },
        ],
    });

    const allRoutines = routines.map((each) => {
        return each.get({
            plain: true,
        });
    });

    res.json({ data: allRoutines });
    //res.send("getAllRoutines");
};

const getRoutineById = async(req, res) => {
    res.send("getRoutineById");
};

module.exports = {
    createNewRoutine,
    updateRoutineById,
    deleteRoutineById,
    getRoutineById,
    getAllRoutines,
};
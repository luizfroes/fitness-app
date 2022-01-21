const { Routine, Exercise, ExerciseRoutine, User } = require("../../models");
const axios = require("axios").default;
const { getPayloadWithValidFieldsOnly } = require("../../helpers");

const createNewRoutine = async(req, res) => {
    try {
        const { user } = req.session;

        const payload = getPayloadWithValidFieldsOnly(
            ["routineName", "routineDate", "routineStart", "routineEnd"],
            req.body
        );

        if (!payload.routineName ||
            !payload.routineDate ||
            !payload.routineStart ||
            !payload.routineEnd
        ) {
            return res.json({
                success: false,
                error: "Cannot POST empty fields",
            });
        }

        if (Object.keys(payload).length !== 4) {
            return res.status(400).json({ error: "Please provide a valid request" });
        }

        const data = await Routine.create({
            date: new Date(payload.routineDate),
            time_start: payload.routineStart,
            time_end: payload.routineEnd,
            name: payload.routineName,
            user_id: user.id,
        });

        return res.status(200).json({
            success: true,
            data: data,
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

const updateRoutineById = async(req, res) => {
    const routine = req.params.target;
    const exerRoutine = await ExerciseRoutine.findAll({
        where: { routine_id: routine },
    });
    console.log(exerRoutine);
    res.send("updateRoutineById");
};

const deleteRoutineById = async(req, res) => {
    res.send("deleteRoutineById");
};

const getAllRoutines = async(req, res) => {
    const routines = await Routine.findAll({
        include: [{
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

    return allRoutines;
    // res.json({ data: allRoutines });
    //res.send("getAllRoutines");
};

const getRoutinesByUser = async(req, res) => {
    const { user } = req.session;
    // console.log(req.session);
    const routines = await Routine.findAll({
        include: [{
                model: Exercise,
                through: ExerciseRoutine,
            },
            {
                model: User,
            },
        ],
        where: { user_id: user.id },
    });

    const allRoutines = routines.map((each) => {
        return each.get({
            plain: true,
        });
    });

    return allRoutines;
};

const getRoutineById = async(req, res) => {
    const routineData = await Routine.findByPk(req.params.id, {
        include: [{
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

    res.json({ data: routine });
};

const getExercisesByTarget = async(req, res) => {
    // console.log(req);
    const URL = `https://exercisedb.p.rapidapi.com/exercises/target/${req}`;

    const { data } = await axios.get(URL, {
        headers: {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
        },
    });

    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);

    // console.log(selected);

    return selected;
};

const createExercise = async(req, res) => {
    try {
        const payload = getPayloadWithValidFieldsOnly(
            ["exercise_name", "image", "target", "routine_id"],
            req.body
        );

        if (Object.keys(payload).length !== 4) {
            return res.status(400).json({ error: "Please provide a valid request" });
        }

        const exercise = await Exercise.create({
            exercise_name: payload.exercise_name,
            image: payload.image,
            target: payload.target,
        });

        const exerciseRoutine = await ExerciseRoutine.create({
            routine_id: payload.routine_id,
            exercise_id: exercise.get("id"),
        });
        return res.json({ success: true });
    } catch (error) {
        console.log(`[ERROR]: Failed to create exercise | ${error.message}`);
        return res.status(500).json({ error: "Failed to create exercise" });
    }
};

module.exports = {
    createNewRoutine,
    updateRoutineById,
    deleteRoutineById,
    getRoutineById,
    getAllRoutines,
    getExercisesByTarget,
    getRoutinesByUser,
    createExercise,
};
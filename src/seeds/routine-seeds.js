const { Routine } = require("../models");

const routineData = [{
        date: new Date("01/01/2022"),
        time_start: "18:30:00",
        time_end: "19:30:00",
        name: "Legs",
        user_id: 1,
    },
    {
        date: new Date("02/01/2022"),
        time_start: "15:30:00",
        time_end: "16:30:00",
        name: "Arms",
        user_id: 1,
    },
    {
        date: new Date("01/01/2022"),
        time_start: "17:00:00",
        time_end: "18:00:00",
        name: "Upper Body",
        user_id: 1,
    },
    {
        date: new Date("08/01/2022"),
        time_start: "15:00:00",
        time_end: "16:00:00",
        name: "Core",
        user_id: 3,
    },
    {
        date: new Date("05/01/2022"),
        time_start: "13:00:00",
        time_end: "14:00:00",
        name: "Cardio",
        user_id: 2,
    },
];

const seedRoutines = () => Routine.bulkCreate(routineData);

module.exports = seedRoutines;
const { User } = require("../models");

const userData = [{
        first_name: "use1",
        last_name: "name1",
        user_name: "user1",
        email: "user1@me.com",
        password: "password1",
        age: 20,
        weight: 65,
        height: 160,
    },
    {
        first_name: "user2",
        last_name: "name2",
        user_name: "user2",
        email: "user2@me.com",
        password: "password2",
        age: 22,
        weight: 62,
        height: 162,
    },
    {
        first_name: "user3",
        last_name: "name3",
        user_name: "user3",
        email: "user3@me.com",
        password: "password3",
        age: 23,
        weight: 63,
        height: 163,
    },
    {
        first_name: "use4",
        last_name: "name4",
        user_name: "user4",
        email: "user4@me.com",
        password: "password4",
        age: 24,
        weight: 64,
        height: 160,
    },
    {
        first_name: "use5",
        last_name: "name5",
        user_name: "user5",
        email: "user5@me.com",
        password: "password5",
        age: 25,
        weight: 65,
        height: 165,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
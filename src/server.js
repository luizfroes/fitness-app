require("dotenv").config();
const express = require("express");

const connection = require("./config/connection");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = async() => {
    try {
        await connection.sync({ force: false });

        app.listen(PORT, () =>
            console.log(`🚀🚀 Server running on http://localhost:${PORT} 🚀🚀`)
        );
    } catch (err) {
        console.log(`[ERROR]: Connection to DB failes - ${err.message}`);
    }
};

init();
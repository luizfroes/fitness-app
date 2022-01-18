require("dotenv").config();
const express = require("express");
const session = require("express-session");
const expressHandlebars = require("express-handlebars");
const path = require("path");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./routes");
const connection = require("./config/connection");

const PORT = process.env.PORT || 4000;

const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 86400 * 1000,
    },
    resave: false,
    saveUninitialized: false,
    store: new sequelizeStore({
        db: connection,
    }),
};

const handlebars = expressHandlebars.create({});
const app = express();

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(session(sessionOptions));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const init = async() => {
    try {
        await connection.sync({ force: false });

        app.listen(PORT, () =>
            console.log(`🚀🚀 Server running on http://localhost:${PORT} 🚀🚀`)
        );
    } catch (err) {
        console.log(`[ERROR]: Connection to DB fails - ${err.message}`);
    }
};

init();
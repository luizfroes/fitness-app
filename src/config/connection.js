const Sequelize = require("sequelize");

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

const dbOptions = {
    host: dbHost,
    dialect: "mysql",
    port: 3306,
    logging: false,
};

const sequelize = new Sequelize(dbName, dbUser, dbPassword, dbOptions);

module.exports = sequelize;
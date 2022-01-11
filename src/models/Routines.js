const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/connection");

class Routines extends Model {}

Routines.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    time_start: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    time_end: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    exercise_id: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        references: {
            model: "exercises",
            key: "id",
        },
    },
}, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "routines",
});

module.exports = Routines;
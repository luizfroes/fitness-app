const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const hooks = require("../hooks/hashPassword");

class Users extends Model {
    async checkPassword(userPassword) {
        const isValid = await bcrypt.compare(userPassword, this.password);
        return isValid;
    }
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 20],
        },
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    height: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
}, {
    sequelize: connection,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
    hooks,
});

module.exports = Users;
const sequelize = require("sequelize")
const { DataTypes } = sequelize
const db = require("../database/db")

const Task = db.define("tasks", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    titre: {
        type: DataTypes.STRING,
    },
})

module.exports = Task
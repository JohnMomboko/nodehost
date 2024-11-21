const Task = require("../models/task");

const task = (req, res) => {
    res.json({ message: "This is my task list" });
}

module.exports = task
const express = require("express")
const router = express.Router()

const task = require("../Controllers/task.js")

router.use(express.static("public"))

router.get("/", task)

module.exports = router
require('dotenv').config({
    path: '.env'
});
const express = require("express");
const routes = require("./routes/routes")
const connexion = require("./database/db")
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

connexion.sync({ force: false })
    .then(console.log("La connexion à  la base de données avec succès"))
    .catch(error => console.log(error));


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use("/api", routes);

app.listen(port, () => console.log(`Le serveur est bien demarré au port ${port}`));
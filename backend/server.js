const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./database/connection')

sequelize.sync().then(() => console.log("Database is ready!"))

app.get('/', (req, res) => {
    res.send("Getting the setup ready...")
})

app.listen(8000, () => {
    console.log("Running the server on port " + process.env.PORT);
})
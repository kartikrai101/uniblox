const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./database/connection')
const bodyParser = require('body-parser');

app.use(bodyParser.json())

sequelize.sync().then(() => console.log("Database is ready!"))

// route imports
const userRoutes = require('./routes/userRoutes');

app.use('/user', userRoutes);

app.listen(8000, () => {
    console.log("Running the server on port " + process.env.PORT);
})
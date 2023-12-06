const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./database/connection')
const bodyParser = require('body-parser');

app.use(bodyParser.json())

sequelize.sync().then(() => console.log("Database is ready!"))

// route imports
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes')

app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);

app.listen(8000, () => {
    console.log("Running the server on port " + process.env.PORT);
})
// import the contents of our .env file in the script file, index.js.
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');

// connect the database to our server using Mongoose.
mongoose.connect(mongoString);
const database = mongoose.connection

// throw a success or an error message depending on whether our database connection is successful or fails
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
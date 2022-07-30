const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this route will look into the folder to get the documentation.js file
app.use('/api/documentation', require('./routes/documentation'));

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)});
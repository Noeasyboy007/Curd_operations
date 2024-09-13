const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const database = require('./config/db')

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await database()
    console.log(`Server Started at Port ${PORT}`.bgBlue);
})
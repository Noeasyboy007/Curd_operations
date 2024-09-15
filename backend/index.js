const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');

const database = require('./config/db')

const router = require('./routes/users.Routes')

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/users', router)

app.listen(PORT, async () => {
    await database()
    console.log(`Server Started at Port ${PORT}`.bgBlue);
})
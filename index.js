const express = require("express");
const app = express();


const { json } = require('express');
app.use(json());

const cors = require('cors');
app.use(cors())

// Database connected.. 

require('./app/db/db');
app.use('/api', require('./app/Api'))

app.listen(2021, () => {
    console.log("2021 port started...");
})


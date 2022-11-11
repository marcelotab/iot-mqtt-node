const express = require('express')
const app = express();
const router = require('./routes');
const {connection} = require("./database/connection.db");
const {error} = require("winston");
const bodyParser = require("express");
const API_VERSION = 'v1';
const PORT = 8080;
require('dotenv').config({
    path: '/home/beto/Projects/learning/iot-mqtt-node'
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.use(`/api/${API_VERSION}`, router);


app.listen(PORT, async () => {
    console.log(`app listening on port ${PORT}`);
    await connection();
});




// Express:
const express = require('express')
const app = express();
const router = require('./routes');

// Swagger:
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

const {connection} = require("./database/connection.db");
const bodyParser = require("express");
const {startMqttClient} = require("./mqtt");
const BASE_PATH = '/api/v1';
const PORT = process.env.NODE_PORT || 3000;
require('dotenv').config();

// Middlewares
app.use(bodyParser.json());
app.use(`${BASE_PATH}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(`${BASE_PATH}`, router);

// Start api rest:
app.listen(PORT, async () => {
    console.log(`app listening on port ${PORT}`);
    await connection();
});

// Start mqtt client:
startMqttClient();



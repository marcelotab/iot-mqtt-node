const express = require('express');
const {createEvent, generateMetrics} = require("../controllers/events.controller");
const router = express.Router();

router.get('/metrics', generateMetrics);
router.post('/', createEvent);

// user routes
module.exports = router
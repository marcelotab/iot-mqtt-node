const express = require('express');
const {createEvent} = require("../controllers/events.controller");
console.log(createEvent.toString())
const router = express.Router();

// Events routes
router.get('/:id', (req,res) => {
    res.send({
        statusCode: 200,
        message: 'It is alive',
    });
});
router.post('/', createEvent);

// user routes
module.exports = router
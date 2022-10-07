const express = require('express');
const router = express.Router();

// Check health routes
router.get('/health', (req,res) => {
    res.send({
        statusCode: 200,
        message: 'It is alive',
    });
});


// user routes
module.exports = router
const express = require('express');
const router = express.Router();
const {getUserById} = require('../controllers/users.controller')
// Check health routes
router.post('/', (req,res) => {
    res.send({
        statusCode: 200,
        message: 'users',
    });
});
router.get('/:id', getUserById);

router.put('/:id', (req,res) => {
    res.send({
        statusCode: 200,
        message: 'users',
    });
});
router.delete('/:id', (req,res) => {
    res.send({
        statusCode: 200,
        message: 'users',
    });
});

// user routes
module.exports = router
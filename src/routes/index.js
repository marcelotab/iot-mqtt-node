const express = require('express')
const router = express.Router()
const health = require('./healths');
const users = require('./users');

router.use('/health', health);
router.use('/users', users);
// router.get('/health', (req,res) => {
//     res.send({
//         statusCode: 200,
//         message: 'It is alive',
//     })
// })
module.exports = router

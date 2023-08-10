const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');
router.get('/test', (req, res) => {
    res.send('Hello World!!')
})
    router.get('/test2', (req, res) => {
        res.send('Second Test')
    })

    module.exports = router ;
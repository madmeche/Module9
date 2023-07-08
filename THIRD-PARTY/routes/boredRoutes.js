const express = require('express')
const router = express.Router()
const boredController = require('../controllers/boredController')

//http://localhost:8080/api/bored/activity
router.get('/activity', (req, res) => {
    console.log('GET /activity' , req.url)
    boredController.getActivity(res)
})

//http://localhost:8080/api/bored/participants/#
router.get('/participants/:participants', (req, res) => {
    console.log('GET', req.url)
    boredController.getParticipants(req, res)
})

//http://localhost:8080/api/bored/activityType
router.get('/activityType', (req, res) => {
    console.log('GET', req.url)
    boredController.getType(req, res)
})

module.exports  = router;
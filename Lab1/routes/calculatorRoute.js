const express = require('express');
const router = express.Router();

const calculatorController = require('../controller/calculatorController')

   
router.get('/test', (req,res)=> { //gives you access to add folders with this function
    calculatorController.testAdd(req,res)
})
   
router.get('/add', (req,res)=> { //gives you access to add folders with this function
    calculatorController.addNumbers(req,res)
})

router.get('/sub', (req,res)=> { //gives you access to add folders with this function
    calculatorController.subNumbers(req,res)
})

router.get('/div', (req,res)=> { //gives you access to add folders with this function
    calculatorController.divNumbers(req,res)
})

router.get('/mult', (req,res)=> { //gives you access to add folders with this function
    calculatorController.multNumbers(req,res)
})

router.get('/square', (req,res)=> { //gives you access to add folders with this function
    calculatorController.squareNumbers(req,res)
})

router.get('/sqRt', (req,res)=> { //gives you access to add folders with this function
    calculatorController.sqRtNumbers(req,res)
})

router.get('/test', (req,res) => {
    calculatorController.testFunction(req,res)
    })

module.exports = router ;
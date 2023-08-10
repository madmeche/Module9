const express = require('express');
const router = express.Router();
const memeController = require("../controllers/memeController")

router.get("/getMeme", (req, res) => {
    console.log("GET", req.url); //req.url shows which endpoint we are pointing to
    memeController.getMeme(res);
  });


// http://localhost:8080/api/meme/getMeme
// router.get("/getMeme", (req, res) => {
//     console.log(memeController.getMeme)
//     console.log('GET ', req.url)
//     memeController.getMeme(res)
// });

module.exports = router;
let express = require('express');
let router = express.Router();
let Controllers = require("../controllers") //index.js

router.get("/", (req, res) => {
    Controllers.postController.getPosts(res);
})

router.post("/create", (req, res) => {
    Controllers.postController.createPost(req.body, res);
})

router.put("/:id", (req, res) => {
    Controllers.postController.updatePost(req, res);
})

router.put("/:id/like", (req, res) => {
    Controllers.postController.likePost(req, res);
})

router.post("/:id/comment", (req, res) => {
    Controllers.postController.commentOnPost(req, res);
})

router.delete("/:id", (req, res) => {
    Controllers.postsController.deletePost(req, res);
})

module.exports = router;


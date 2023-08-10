"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
  //finds all Posts
  Models.Posts.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
//   console.log(data);
  new Models.Posts(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Posts.findByIdAndRemove(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const likePost = (req, res) => {
    Models.Posts.findByIdAndUpdate(
        req.params.id,
        {$inc: { likes: 1 }}, 
        { new: true}
    )
    .then((data) => res.send({ result: 200, data: data}))
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }) 
})
};

const commentOnPost = (req, res) => {
    const comment = {
        text: req.body.text,
        createdAt: new Date(),
    };

    Models.Posts.findByIdAndUpdate(
        req.params.id,
        { $push: { comments: comment } }, 
        { new: true }
    )
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message }) 

    })
}

module.exports = {
  getPosts,
  createPost,
  deletePost,
  commentOnPost,
  likePost
};
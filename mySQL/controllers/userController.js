"use strict";

const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const updateUser = (req, res) => {
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUsers,
  createUsers,
};

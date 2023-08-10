"use strict";

const bcrypt = require("bcrypt");

const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const getUsersById = (req, res) => {
  Models.User.findAll({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const getUsersByIdTestPassword = (req, res) => {
  const unhashedPassword = req.body.password;
  const email = req.body.emailId;
  Models.User.findAll({ where: { emailId: email } })
    .then((data) => {
      if (
        data &&
        bcrypt.compareSync(unhashedPassword, data[0].dataValues.password)
      ) {
        console.log("password is correct");
        res.status(200).send({ data: "success" });
      } else {
        console.log("password is incorrect");
        res.status(403).send({ data: "Wrong username or password!" });
      }
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

const createUsers = async (data, res) => {
  const salt = await bcrypt.genSaltSync(10, "a");
  const originalPassword = data.password;
  const hashedPassword = bcrypt.hashSync(data.password, salt);
  data.password = hashedPassword;

  Models.User.create(data)
    .then((data) => {
      data.password = originalPassword;
      res.send({ result: 201, data: data });
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
      console.log("Error:", err);
      throw err;
    });
};

const deleteUser = (req, res) => {
  Models.User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

module.exports = {
  getUsers,
  getUsersById,
  getUsersByIdTestPassword,
  createUsers,
  updateUser,
  deleteUser,
};

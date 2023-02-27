const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../api_functions/user.functions");

const router = express.Router();

router.route("/register").post(async (req, res) => {
  createUser(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/").get((req, res) => {
  getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/user/:username").get((req, res) => {
  const username = req.params.username;

  getUser(username)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/user/:username").delete((req, res) => {
  const username = req.params.username;

  deleteUser(username)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

module.exports = router;

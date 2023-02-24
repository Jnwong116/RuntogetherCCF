const express = require("express");
const { createUser } = require("../api_functions/user.functions");

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

module.exports = router;

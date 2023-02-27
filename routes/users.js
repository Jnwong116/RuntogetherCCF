const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateVision,
  uploadNominationLink,
  updatePosition,
  updateNominations,
} = require("../api_functions/user.functions");

const router = express.Router();

// Creates a new user
router.route("/register").post(async (req, res) => {
  createUser(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Gets all users
router.route("/").get((req, res) => {
  getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Gets a user by username
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

// Deletes a user by username
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

// Adds a vision to a user
router.route("/vision/:username").post((req, res) => {
  const username = req.params.username;
  const vision = req.body.vision;

  updateVision(username, vision)
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

// Adds a nomination link to a user
router.route("/nominationLink/:username").post((req, res) => {
  const username = req.params.username;
  const nominationLink = req.body.nominationLink;

  uploadNominationLink(username, nominationLink)
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

// Adds a position to a user
router.route("/position/:username").post((req, res) => {
  const username = req.params.username;
  const position = req.body.position;

  updatePosition(username, position)
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

// Adds a nomination to a user
router.route("/nomination/:username").post((req, res) => {
  const username = req.params.username;
  const nomination = req.body.nomination;
  const nominator = req.body.nominator;

  updateNominations(username, nominator, nomination)
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

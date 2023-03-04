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

// Gets a user by facebook id
router.route("/user/:id").get((req, res) => {
  const id = req.params.id;

  getUser(id)
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

// Deletes a user by facebook id
router.route("/user/:id").delete((req, res) => {
  const id = req.params.id;

  deleteUser(id)
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
router.route("/vision/:id").post((req, res) => {
  const id = req.params.id;
  const vision = req.body.vision;

  updateVision(id, vision)
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
router.route("/nominationLink/:id").post((req, res) => {
  const id = req.params.id;
  const nominationLink = req.body.nominationLink;

  uploadNominationLink(id, nominationLink)
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
router.route("/position/:id").post((req, res) => {
  const id = req.params.id;
  const positions = req.body.positions;
  const status = req.body.status;

  updatePosition(id, positions, status)
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
router.route("/nomination/:id").post((req, res) => {
  const id = req.params.id;
  const nomination = req.body.nomination;
  const nominator = req.body.nominator;

  updateNominations(id, nominator, nomination)
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

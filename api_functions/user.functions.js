const { User } = require("../models/user.model");

const createUser = async (UserInfo) => {
  // Checks if a user exists already
  const currUser = await User.findOne({ name: UserInfo.name });

  if (currUser !== null) {
    throw "User already exists";
  }

  const user = new User(UserInfo);

  user.save();

  return user;
};

const getAllUsers = () => {
  return User.find();
};

const getUser = (username) => {
  return User.findOne({ name: username });
};

const deleteUser = (username) => {
  return User.findOneAndDelete({ name: username });
};

const updateVision = async (username, vision) => {
  const user = await User.findOne({ name: username });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.vision = vision;

  user.save();
  return user;
};

const uploadNominationLink = async (username, nominationLink) => {
  const user = await User.findOne({ name: username });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.nominationLink = nominationLink;
  user.save();
  return user;
};

const updatePosition = async (username, position) => {
  const user = await User.findOne({ name: username });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.position = position;
  user.save();
  return user;
};

const updateNominations = async (username, nominator, nomination) => {
  const user = await User.findOne({ name: username });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  // Finds correct nomination
  for (let i = 0; i < user.nominations.length; i++) {
    if (user.nominations[i].nominator === nominator) {
      user.nominations[i].nomination = nomination;
      user.save();
      return user;
    }
  }

  // If no nomination is found, create a new one
  const newNomination = {
    nominator: nominator,
    nomination: nomination,
  };

  user.nominations.push(newNomination);
  user.save();
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateVision,
  uploadNominationLink,
  updatePosition,
  updateNominations,
};

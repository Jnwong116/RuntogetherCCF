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

module.exports = { createUser, getAllUsers, getUser, deleteUser };

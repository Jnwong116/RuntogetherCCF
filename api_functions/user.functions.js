const { User } = require("../models/user.model");

const createUser = async (UserInfo) => {
  // Checks if a user exists already
  const currUser = await User.findOne({ name: UserInfo.name });

  if (currUser !== null) {
    throw "User already exists";
  }

  const user = new User(UserInfo);

  return user;
};

module.exports = { createUser };

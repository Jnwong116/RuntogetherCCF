const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nominationSchema = new Schema({
  nominator: { type: String, required: true },
  nomination: { type: String, required: true },
});

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  position: { type: String, required: true },
  nominations: { type: [nominationSchema], required: true, default: [] },
  vision: { type: String, default: "" },
  nominationLink: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = newSchema({
  status: {
    type: String,
    enum: ["WAITING", "CONSIDERING", "DECIDED"],
  },
});

const nominationSchema = new Schema({
  nominator: { type: String, required: true },
  nomination: { type: String, required: true },
});

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  positions: { type: [String], required: true, default: [] },
  status: { type: statusSchema, required: true, default: "WAITING" },
  nominations: { type: [nominationSchema], required: true, default: [] },
  visionName: { type: String, default: "" },
  visionLink: { type: String, default: "" },
  nominationLink: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };

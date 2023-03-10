const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nominationSchema = new Schema({
  nominator: { type: String, required: true },
  nomination: { type: String, required: true },
  nominatorID: { type: String, required: true },
});

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  positions: { type: [String], default: [] },
  status: {
    type: String,
    enum: ["WAITING", "CONSIDERING", "DECIDED"],
    default: "WAITING",
  },
  nominations: { type: [nominationSchema], required: true, default: [] },
  visionName: { type: String, default: "" },
  visionLink: { type: String, default: "" },
  nominationLink: { type: String },
  program: { type: String, default: "" },
  year: { type: String, default: "" },
  church: { type: String, default: "" },
  yearsFollowingChrist: { type: String, default: "" },
  yearsInCCF: { type: String, default: "" },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };

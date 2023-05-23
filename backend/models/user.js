const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  mail: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("User", userSchema);
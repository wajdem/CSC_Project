const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confPassword: {
    type: String,
    required: true,
  },
  status: String,
  default: "inactive"
});

module.exports = mongoose.model("User", userSchema);

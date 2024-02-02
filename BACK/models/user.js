const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

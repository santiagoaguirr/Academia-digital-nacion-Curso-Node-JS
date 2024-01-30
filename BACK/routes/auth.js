// routes/auth.js

const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "Usuario registrado con éxito." });
  } catch (error) {
    res.status(500).json({ error: "Error al registrar el usuario." });
  }
});

module.exports = router;

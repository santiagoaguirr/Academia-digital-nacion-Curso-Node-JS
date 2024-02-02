const express = require("express");
const authController = require("../controllers/authcontrollers");

const router = express.Router();

router.post("/registro", async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;
    await authController.registerUser(usuario, contrasena);
    res.status(201).json({ message: "Registro exitoso" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;
    const token = await authController.loginUser(usuario, contrasena);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error: error.message });
  }
});

module.exports = router;

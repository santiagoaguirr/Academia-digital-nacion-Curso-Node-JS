// SERVER
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./conexion");
const publicacionesRoutes = require("./routes/publicaciones");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const authRoutes = require("./routes/authRoutes");

app.use("/auth", authRoutes);

// Rutas de publicaciones
app.use("/publicaciones", publicacionesRoutes);

// Iniciar el Svvv
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Rutas login y registro

app.post("/registro", (req, res) => {
  const { usuario, contrasena } = req.body;
  // Aquí puedes realizar la lógica de registro y almacenar los datos en una base de datos
  console.log("Registrando usuario:", usuario);
  res.send("Registro exitoso");
});

app.post("/login", (req, res) => {
  const { usuario, contrasena } = req.body;
  // Aquí puedes realizar la lógica de inicio de sesión y autenticación
  console.log("Iniciando sesión para el usuario:", usuario);
  res.send("Inicio de sesión exitoso");
});

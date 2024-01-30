const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./conexion");
const publicacionesRoutes = require("./routes/publicaciones");
const authRoutes = require("./routes/auth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectToDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas de publicaciones
app.use("/publicaciones", publicacionesRoutes);

// Rutas de autenticación
app.use("/auth", authRoutes);

// Iniciar el Svvv
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

const mongoose = require("mongoose");

const publicacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  imagen: String,
  comentarios: [{ type: String }],
});

module.exports = mongoose.model("publicaciones", publicacionSchema);

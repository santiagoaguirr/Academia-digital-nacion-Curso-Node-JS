const express = require("express");
const router = express.Router();
const Publicacion = require("../models/publicacion");

router.get("/", async (req, res) => {
  try {
    const publicaciones = await Publicacion.find();
    res.json(publicaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener publicaciones" });
  }
});

router.post("/", async (req, res) => {
  const { titulo, descripcion, imagen, comentarios } = req.body;

  try {
    const nuevaPublicacion = new Publicacion({
      titulo,
      descripcion,
      imagen,
      comentarios,
    });
    await nuevaPublicacion.save();
    res.json({ mensaje: "Publicación creada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la publicación" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const publicacion = await Publicacion.findById(id);
    res.json(publicacion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la publicación" });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { titulo, descripcion, imagen, comentarios } = req.body;
  console.log(comentarios);
  try {
    await Publicacion.findByIdAndUpdate(id, {
      titulo,
      descripcion,
      imagen,
      comentarios,
    });
    res.json({ mensaje: "Publicación actualizada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al actualizar la publicación" });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Publicacion.findByIdAndDelete(id);
    res.json({ mensaje: "Publicación eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar la publicación" });
  }
});

router.post("/:id/comentarios", async (req, res) => {
  const postId = req.params.id;
  const { comentario } = req.body;

  try {
    const publicacion = await Publicacion.findById(postId);

    if (!publicacion) {
      return res.status(404).json({ mensaje: "Publicación no encontrada" });
    }

    // Agregar el nuevo comentario a la publicación
    publicacion.comentarios.push(comentario);
    await publicacion.save();

    res.json({ mensaje: "Comentario agregado exitosamente", publicacion });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error al agregar comentario a la publicación" });
  }
});

module.exports = router;

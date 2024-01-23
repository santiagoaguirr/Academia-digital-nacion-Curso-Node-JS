import { Router } from "express"
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/publicacion.controller.js"

const postsRouter = Router()

// Obtener todos los posts
postsRouter.get("/", getPosts)

// Obtener un solo post
postsRouter.get("/:id", getPost)

// Crear un post
postsRouter.post("/", createPost)

// Actualizar un post
postsRouter.put("/:id", updatePost)

// Eliminar un post
postsRouter.delete("/:id", deletePost)

export { postsRouter }

import { Router } from "express"
import {
  createComment,
  getComments,
} from "../controllers/comentarios.controller.js"

const commentsRouter = Router()

// Obtener todos los posts
commentsRouter.get("/:id", getComments)

// Crear un post
commentsRouter.post("/:id", createComment)

export { commentsRouter }

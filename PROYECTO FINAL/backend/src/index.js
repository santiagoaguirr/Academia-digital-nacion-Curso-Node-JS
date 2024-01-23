import express from "express"
import cors from "cors"
import { connectDB } from "./config/conexion.js"
import { postsRouter } from "./routes/publicacion.routes.js"
import { commentsRouter } from "./routes/comentarios.routes.js"

const app = express()

// Middleware necesarios para que Express pueda interpretar los datos que le enviamos desde el cliente
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS
app.use(cors())

// Rutas
app.use("/publicacion", postsRouter)
app.use("/comentarios", commentsRouter)

connectDB()
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is running on port 8080")
    })
  })
  .catch((err) => {})

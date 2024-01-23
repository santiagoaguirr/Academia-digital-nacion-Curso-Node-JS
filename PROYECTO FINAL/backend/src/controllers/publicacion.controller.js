import postModel from "../models/publicacion.js"

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find()
    res.json(posts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getPost = async (req, res) => {
  const { id } = req.params
  try {
    const post = await postModel.findById(id)

    if (!post) {
      return res.status(404).json({ message: "Post no encontrado" })
    }

    res.json(post)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const { title, description, image } = req.body

  if (!title) {
    return res.status(400).json({ message: "El titulo es requerido" })
  }

  const newPost = new postModel({ title, description, image })

  try {
    const createdPost = await newPost.save()
    res.status(201).json(createdPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params
  const { title, description, image } = req.body

  try {
    const post = await postModel.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    )
    res.json(post)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params

  try {
    await postModel.findByIdAndDelete(id)
    res.json({ message: "Post eliminado exitosamente" })
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

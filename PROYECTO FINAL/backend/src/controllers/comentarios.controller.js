import postModel from "../models/publicacion.js"

export const getComments = async (req, res) => {
  const { id } = req.params
  try {
    const post = await postModel.findById(id)
    res.json(post.comments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createComment = async (req, res) => {
  const { id } = req.params
  const { content } = req.body
  try {
    const post = await postModel.findById(id)
    post.comments.push({ content })
    await post.save()
    res.status(201).json(post.comments)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

import { useState } from "react";
import { createNewPost } from "../apis/postsApis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    comentarios: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createNewPost(newPost);

      toast.success("Nueva publicación creada con éxito");
      setNewPost({
        titulo: "",
        descripcion: "",
        imagen: "",
        comentarios: [],
      });
    } catch (error) {
      toast.error("Error al enviar la nueva publicación");
      console.error("Error al enviar la nueva publicación:", error);
    }
  };

  return (
    <div className="container">
      <h2>Nueva Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            value={newPost.titulo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={newPost.descripcion}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="imagen" className="form-label">
            URL de la Imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="imagen"
            name="imagen"
            value={newPost.imagen}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Publicación
        </button>
      </form>

      {/*Agrega ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default NewPost;

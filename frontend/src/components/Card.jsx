import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../apis/postsApis";

const Card = (props) => {
  const navigate = useNavigate();
  const { data, onDelete } = props;

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "¿Estás seguro de eliminar esta publicación?"
    );

    if (isConfirmed) {
      try {
        await deletePost(data._id);

        onDelete(data._id);
        console.log("Publicación eliminada con éxito");
      } catch (error) {
        console.error("Error al eliminar la publicación:", error);
      }
    }
  };

  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={data.imagen} alt={data.imagen} />
        <div className="card-body">
          <h5 className="card-title">{data.titulo}</h5>
          <p className="card-text">{data.descripcion}</p>

          <button
            onClick={() => {
              navigate("/" + data._id);
            }}
            className="btn btn-primary me-2"
          >
            Más información
          </button>

          <button onClick={handleDelete} className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

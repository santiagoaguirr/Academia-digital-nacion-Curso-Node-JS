import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  /*{
      titulo: "Título de la publicación 1",
      descripcion: "Descripción de la publicación 1",
      imagen: "url_de_la_imagen_1.jpg",
      comentarios: [
        {
          contenido: "Comentario 1",
        },
        {
          contenido: "Comentario 2",
        },
      ],
    }, */

  return (
    <div className="col">
      <div className="card">
        <img className="card-img-top" src={data.imagen} alt={data.imagen} />
        <div className="card-body">
          <h5 className="card-title">{data.titulo}</h5>
          <p className="card-text">{data.descripcion}</p>

          <button
            onClick={() => {
              navigate("/" + data.id);
            }}
            className="btn btn-primary"
          >
            Mas informacion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

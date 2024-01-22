import { useEffect, useState } from "react";
import { getCardByID } from "../apis/postsApis";

const Post = () => {
  const postId = window.location.pathname.split("/")[1];

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await getCardByID(postId);
        if (response) {
          setCardData(response);
        }
      } catch (error) {
        console.error("Error al obtener post:", error);
      }
      setLoading(false);
    };

    if (!loading) {
      fetchData();
    }
  }, []);

  return (
    <>
      <div className="container my-5 rounded-3 border shadow-lg">
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src={cardData?.imagen}
            alt={cardData?.imagen}
            width="80%"
          />
        </div>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center ">
          <div className="col-xl p-3 p-lg-5 pt-lg-3">
            <h1 className="display-1 fw-bold text-body-emphasis">
              {cardData.titulo}
            </h1>
            <p className="lead">{cardData.descripcion}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              {cardData?.comentarios?.length === 0 ? (
                <p>Este post todavia no tiene comentarios disponibles</p>
              ) : (
                cardData.comentarios?.map((comentario, index) => {
                  return <p key={index}>{comentario.contenido}</p>;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

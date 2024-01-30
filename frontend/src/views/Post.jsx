import React, { useEffect, useState } from "react";
import { getCardByID, addCommentToPost } from "../apis/postsApis";
import "../styles/Comentarios.css";
import "../styles/Post.css";

const Post = () => {
  const postId = window.location.pathname.split("/")[1];

  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState({});
  const [newComment, setNewComment] = useState("");

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

  const handleAddComment = async () => {
    try {
      const response = await addCommentToPost(postId, {
        comentario: newComment,
      });

      if (response) {
        setCardData((prevData) => ({
          ...prevData,
          comentarios: [...prevData.comentarios, newComment],
        }));

        setNewComment("");

        console.log("Comentario agregado exitosamente");
      }
    } catch (error) {
      console.error("Error al agregar comentario:", error);
    }
  };

  return (
    <>
      <div className="container my-5 rounded-3 border shadow-lg">
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg post-image-container">
          <img
            className="rounded-lg-3 post-image"
            src={cardData?.imagen}
            alt={cardData?.imagen}
          />
        </div>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center ">
          <div className="col-xl p-3 p-lg-5 pt-lg-3">
            <h1 className="display-1 fw-bold text-body-emphasis">
              {cardData.titulo}
            </h1>
            <p className="lead">{cardData.descripcion}</p>

            {/* Forms para agregar coments*/}
            <div className="mb-4">
              <label className="form-label">Agregar Comentario:</label>
              <textarea
                className="form-control"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                className="btn btn-primary mt-3"
                onClick={handleAddComment}
                disabled={!newComment.trim()}
              >
                Agregar Comentario
              </button>
            </div>

            {/* Comentarios existentes */}
            <div className="mt-4">
              {cardData?.comentarios?.length === 0 ? (
                <p>Este post todavía no tiene comentarios disponibles</p>
              ) : (
                cardData.comentarios?.map((comentario, index) => (
                  <div key={index} className="comment-container">
                    <p className="comment-text">{comentario}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

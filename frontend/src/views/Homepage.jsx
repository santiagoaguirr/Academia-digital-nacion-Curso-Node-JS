// Homepage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import "../styles/Homepage.css";

import { getCards } from "../apis/postsApis";
import Card from "../components/Card";

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await getCards();
        if (response) {
          setCards(response);
        }
      } catch (error) {
        console.error("Error al obtener posts:", error);
      }
      setLoading(false);
    };

    if (!loading) {
      fetchData();
    }
  }, [cards, loading]);

  const handleOnDelete = (id) => {
    setCards((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Sabores selectos</h1>
              <p className="lead text-body-secondary">
                Descubre una experiencia única de sabores exquisitos.
              </p>
              <p>
                <Link to="/newPost" className="btn btn-primary my-2">
                  Crear posteo
                </Link>{" "}
                <Link to="/login" className="btn btn-outline-primary mx-2">
                  Iniciar sesión
                </Link>{" "}
                <Link to="/registro" className="btn btn-outline-primary mx-2">
                  Registrarse
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            {cards.length === 0 ? (
              <div className="col">
                <div className="card-body">
                  <p className="card-text">No tenemos post para mostrar</p>
                </div>
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {cards.map((card, index) => {
                  card.id = index;
                  return (
                    <Card key={index} data={card} onDelete={handleOnDelete} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;

import { useEffect, useState } from "react";
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
  }, []);

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
                <a href="/newPost" className="btn btn-primary my-2">
                  Crear posteo
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            {cards.lenght === 0 ? (
              <div className="col">
                <div className="card-body">
                  <p className="card-text">No tenemos post para mostrar</p>
                </div>
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {cards.map((card, index) => {
                  card.id = index;
                  return <Card key={index} data={card} />;
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

const baseBackendURL = "http://localhost:3000";

let publicacionesMock = [
  {
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
  },
  {
    titulo: "Título de la publicación 2",
    descripcion: "Descripción de la publicación 2",
    imagen: "url_de_la_imagen_2.jpg",
    comentarios: [
      {
        contenido: "Comentario 12",
      },
      {
        contenido: "Comentario 22",
      },
    ],
  },
  {
    titulo: "Título de la publicación 3",
    descripcion: "Descripción de la publicación 3",
    imagen: "url_de_la_imagen_3.jpg",
    comentarios: [
      {
        contenido: "Comentario 312",
      },
      {
        contenido: "Comentario 232",
      },
    ],
  },
];

export const getCards = async () => {
  let publicaciones = [];
  let url = baseBackendURL + `/publicaciones`;
  await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())  // Parsea la respuesta a JSON
    .then((data) => {
      publicaciones = data;
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });

  return publicaciones;
};


export const getCardByID = async (id) => {
  let url = baseBackendURL + `/publicaciones/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

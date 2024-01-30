const baseBackendURL = "http://localhost:3000";

export const getCards = async () => {
  let publicaciones = [];
  let url = baseBackendURL + "/publicaciones";
  try {
    let response = await fetch(url);
    let data = await response.json();
    publicaciones = data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return publicaciones;
};

export const getCardByID = async (id) => {
  let publicaciones = [];
  let url = baseBackendURL + "/publicaciones/" + id;
  try {
    let response = await fetch(url);
    let data = await response.json();
    publicaciones = data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return publicaciones;
};

export const createNewPost = async (newPostData) => {
  let url = baseBackendURL + "/publicaciones";
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPostData),
    });

    if (!response.ok) {
      throw new Error("Error al crear la publicación");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  let url = baseBackendURL + `/publicaciones/${postId}`;
  try {
    let response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la publicación");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addCommentToPost = async (postId, commentData) => {
  let url = baseBackendURL + `/publicaciones/${postId}/comentarios`;
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(
        `Error al agregar comentario a la publicación: ${errorMessage}`
      );
      throw new Error(
        `Error al agregar comentario a la publicación: ${errorMessage}`
      );
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

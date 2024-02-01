// Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeColor, setMensajeColor] = useState(""); // Nuevo estado para el color del mensaje

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, contrasena }),
      });

      if (response.ok) {
        // Si el estado de la respuesta es exitoso (2xx), entonces procesa la respuesta
        const data = await response.json();

        // Puedes realizar acciones adicionales basadas en la respuesta del backend
        setMensajeColor("green"); // Establece el color del mensaje a verde
        setMensaje("Inicio de sesión exitoso");
      } else {
        // Si el estado de la respuesta no es exitoso, entonces muestra un mensaje de error
        const errorData = await response.json();
        setMensajeColor("red"); // Establece el color del mensaje a rojo
        setMensaje(`Error: ${errorData.error}`);
      }
    } catch (error) {
      // En caso de cualquier error en la solicitud, muestra un mensaje de error
      setMensajeColor("red"); // Establece el color del mensaje a rojo
      setMensaje(`Error al realizar la solicitud: ${error.message}`);
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p style={{ color: mensajeColor }}>{mensaje}</p>
    </div>
  );
};

export default Login;

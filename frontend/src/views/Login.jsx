import React, { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeColor, setMensajeColor] = useState("");

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
        const data = await response.json();

        setMensajeColor("green");
        setMensaje("Inicio de sesión exitoso");
      } else {
        const errorData = await response.json();
        setMensajeColor("red");
        setMensaje(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMensajeColor("red");
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

// Login.jsx

import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Envía una solicitud al backend para autenticar al usuario
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Maneja el caso de inicio de sesión exitoso en el frontend
        const userData = await response.json();
        onLogin(userData);
      } else {
        // Maneja el caso de inicio de sesión fallido
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error(
        "Error al procesar la solicitud de inicio de sesión",
        error
      );
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <label>
          Usuario:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;

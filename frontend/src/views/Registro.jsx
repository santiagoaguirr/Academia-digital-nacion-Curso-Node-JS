// Registro.jsx
import React, { useState } from "react";

const Registro = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");

  const handleRegistro = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, contrasena }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Si el registro es exitoso, actualiza el estado para mostrar la confirmación
      setRegistroExitoso(true);
    } catch (error) {
      console.error(
        "Error al realizar la solicitud de registro:",
        error.message
      );
      // Actualiza el estado para mostrar el mensaje de error
      setErrorMensaje(error.message);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
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
      <button onClick={handleRegistro}>Registrarse</button>

      {/* Mostrame confirmación si el registro es exitoso */}
      {registroExitoso && (
        <p style={{ color: "green" }}>
          ¡Registro exitoso! Ahora puedes iniciar sesión.
        </p>
      )}

      {/* Mostrame mensaje de error si hay un error */}
      {errorMensaje && <p style={{ color: "red" }}>{errorMensaje}</p>}
    </div>
  );
};

export default Registro;

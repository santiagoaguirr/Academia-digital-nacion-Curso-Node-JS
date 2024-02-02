const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Importa el modelo de usuario

const registerUser = async (usuario, contrasena) => {
  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ usuario });

    console.log("Existing User:", existingUser);

    if (existingUser) {
      throw new Error("El usuario ya existe");
    }

    if (!contrasena) {
      throw new Error("La contraseña no puede estar vacía");
    }

    // Hashea la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    await User.create({ usuario, contrasena: hashedPassword });
  } catch (error) {
    console.error("Error en el registro:", error.message);
    throw error;
  }
};

const loginUser = async (usuario, contrasena) => {
  try {
    // Busca el usuario en la base de datos
    const user = await User.findOne({ usuario });

    // Verifica si el usuario existe
    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    // Compara la contraseña ingresada con la almacenada
    const passwordMatch = await bcrypt.compare(contrasena, user.contrasena);

    // Verifica si la contraseña coincide
    if (!passwordMatch) {
      throw new Error("Credenciales inválidas");
    }

    // Genera un token JWT para la autenticación
    const token = jwt.sign({ usuario }, "clave-secreta", { expiresIn: "1h" });

    return token;
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, loginUser };

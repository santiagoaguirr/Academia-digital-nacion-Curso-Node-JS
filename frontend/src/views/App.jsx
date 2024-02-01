import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import NewPost from "./NewPost";
import Post from "./Post";
import Login from "./Login";
import Registro from "./Registro"; // Agrega la importación de tu componente Registro
import Footer from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/posts/:post" element={<Post />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />{" "}
        {/* Nueva ruta para la página de registro */}
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

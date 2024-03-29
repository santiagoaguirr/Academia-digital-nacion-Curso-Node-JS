import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import NewPost from "./NewPost";
import Post from "./Post";
import Footer from "../components/Footer";
import Login from "./Login";
import Registro from "./Registro";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/:post" element={<Post />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />{" "}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

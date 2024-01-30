import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";

import Navbar from "../components/Navbar";
import Homepage from "./Homepage";
import NewPost from "./NewPost";
import Post from "./Post";
import Footer from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/:post" element={<Post />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

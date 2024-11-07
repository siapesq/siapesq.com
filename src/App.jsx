import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./style/style.css";
import "./style/siapreps/siapreps_section/style.css";
import About from "./pages/about";
import Index from "./pages";
import Siapreps from "./pages/siapreps";
import Phytobloom from "./pages/phytobloom";
import Contato from "./pages/contato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/siapreps" element={<Siapreps />} />
        <Route path="/phytobloom" element={<Phytobloom />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;

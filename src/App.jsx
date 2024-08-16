import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/style.css";

import About from "./pages/about";
import Index from "./pages";
import Siapreps from "./pages/siapreps";
import Phytobloom from "./pages/phytobloom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/siapreps" element={<Siapreps />} />
        <Route path="/phytobloom" element={<Phytobloom />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

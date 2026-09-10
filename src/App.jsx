import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./style/style.css";
import "./style/siapreps/siapreps_section/style.css";
import Index from "./pages";
import Siapreps from "./pages/siapreps";
import Phytobloom from "./pages/phytobloom";
import Plataforma from "./pages/plataforma";
import Contato from "./pages/contato";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/siapreps" element={<Siapreps />} />
        <Route path="/phytobloom" element={<Phytobloom />} />
        <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/contato" element={<Contato />} />
          {/* <Route path="*" element={<Index/>} /> */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

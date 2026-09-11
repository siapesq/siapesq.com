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
import ScrollToTop from "./components/common/ScrollToTop";

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
        {/* global: header não é fixo, então é o único jeito rápido de voltar
            ao topo em páginas longas. Cor de acento troca sozinha por tema. */}
        <ScrollToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;

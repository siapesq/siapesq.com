import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./style/style.css";
import "./style/siapreps/siapreps_section/style.css";
import Index from "./pages/index";
import ScrollToTop from "./components/common/ScrollToTop";

const Siapreps = lazy(() => import("./pages/siapreps"));
const Phytobloom = lazy(() => import("./pages/phytobloom"));
const Plataforma = lazy(() => import("./pages/plataforma"));
const Contato = lazy(() => import("./pages/contato"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<p role="status">Carregando página...</p>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/siapreps" element={<Siapreps />} />
            <Route path="/phytobloom" element={<Phytobloom />} />
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </Suspense>
        {/* global: header não é fixo, então é o único jeito rápido de voltar
            ao topo em páginas longas. Cor de acento troca sozinha por tema. */}
        <ScrollToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;

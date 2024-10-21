// import { React, useEffect, useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/style.css";
import "./style/siapreps/siapreps_section/style.css";
// import About from "./pages/about";
import Index from "./pages";
import Siapreps from "./pages/siapreps";
import Phytobloom from "./pages/phytobloom";
import Contato from "./pages/contato";

function App() {

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {

  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   }

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };

  // }, [windowWidth]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/teste" element={<About />} /> */}
        <Route path="/siapreps" element={<Siapreps />} />
        <Route path="/phytobloom" element={<Phytobloom />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

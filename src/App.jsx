import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./style/style.css";

import About from "./pages/about";
import Index from "./pages";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App;

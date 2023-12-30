import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"
import Update from "./Update";
import About from "./About";
import Product from "./Product";
import NotFound from "./NotFound";
import Opportunities from "./Opportunities";
function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/updates" element={<Update />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/Opportunities" element={<Opportunities />} />
            
          </Routes>
    </BrowserRouter>
  );
}

export default App;
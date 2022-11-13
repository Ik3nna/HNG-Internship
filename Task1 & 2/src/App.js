import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

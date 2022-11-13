import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return(
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/home" element={<Home />} />
         
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

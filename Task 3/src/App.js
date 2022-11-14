import React from "react";
import Home from "./pages/home";
import Place from "./pages/place";
import NFT from "./pages/nfts";
import Community from "./pages/community";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="/nfts" element={<NFT />} />
          <Route path="/community" element={<Community />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

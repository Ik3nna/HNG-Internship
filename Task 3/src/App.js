import React from "react";
// import Home from "./pages/home";
// import Place from "./pages/place";
// import NFT from "./pages/nfts";
// import Community from "./pages/community";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = React.lazy(()=>import("./pages/home"));
const Place = React.lazy(()=>import("./pages/place"));
const NFT = React.lazy(()=>import("./pages/nfts"));
const Community = React.lazy(()=>import("./pages/community"));

function App() {
  return(
    <>
      <BrowserRouter>
        <AnimatePresence onExitComplete>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/place" element={<Place />} />
            <Route path="/nfts" element={<NFT />} />
            <Route path="/community" element={<Community />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;

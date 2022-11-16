import React from "react";
// import Main from "../components/Hero-Section/main";
// import Adventure from "../components/Adventure-Section/adventure";
// import Metabnb from "../components/NFTs-Section/metabnb";
// import Header from "../components/header";
// import Footer from "../components/footer";
import { motion } from "framer-motion";

const Main = React.lazy(()=>import("../components/Hero-Section/main"));
const Adventure = React.lazy(()=>import("../components/Adventure-Section/adventure"));
const Metabnb = React.lazy(()=>import("../components/NFTs-Section/metabnb"));
const Header = React.lazy(()=>import("../components/header"));
const Footer = React.lazy(()=>import("../components/footer"));


function Home () {
    return(
        <motion.main initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            transition={{ duration: 3 }}
        >
            <Header />
            <Main />
            <Adventure />
            <Metabnb />
            <Footer />
        </motion.main>
    );
}

export default Home;
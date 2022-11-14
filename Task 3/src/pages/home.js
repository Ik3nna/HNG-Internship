import React from "react";
import Main from "../components/Hero-Section/main";
import Adventure from "../components/Adventure-Section/adventure";
import Metabnb from "../components/NFTs-Section/metabnb";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";

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
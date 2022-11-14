import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";

function Place () {
    return(
        <motion.main initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            transition={{ duration: 3 }}
        >
            <Header />
            <Footer />
        </motion.main>
    );
}

export default Place;
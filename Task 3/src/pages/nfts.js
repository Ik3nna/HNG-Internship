import React from "react";
import ComingSoon from "../components/comingsoon";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion } from "framer-motion";

function NFT () {
    return(
        <motion.main initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            transition={{ duration: 3 }}
        >
            <Header />
            <ComingSoon />
            <Footer />
        </motion.main>
    );
}

export default NFT;
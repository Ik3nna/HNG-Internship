import React from "react";
import Main from "../components/Hero-Section/main";
import Adventure from "../components/Adventure-Section/adventure";
import Metabnb from "../components/NFTs-Section/metabnb";
import Header from "../components/header";

function Home () {
    return(
        <>
            <Header />
            <Main />
            <Adventure />
            <Metabnb />
        </>
    );
}

export default Home;
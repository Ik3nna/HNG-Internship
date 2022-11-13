import React from "react";
import Main from "../components/Hero-Section/main";
import Adventure from "../components/Adventure-Section/adventure";
import Metabnb from "../components/NFTs-Section/metabnb";

function Home () {
    return(
        <>
            <Main />
            <Adventure />
            <Metabnb />
        </>
    );
}

export default Home;
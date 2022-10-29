import React from "react";
import ShareBtn from "./shareBtn";
import { links } from "./data";

function Home() {
    
    return(
        <main>
            {/* Profile Section */}
            <img src="/assets/profile__img.png" id="profile__img" alt="profile_img" />

            <ShareBtn />

            <p id="twitter">_Ik3nna</p>
            <p id="slack">Nduks</p>

            {/* Links section */}
            <article className="links-container">
                {links.map((link)=>{
                    const { id, name, linkTo } = link;
                    return(
                        <a key={id} href={linkTo} rel="noreferrer" target="_blank">
                            {name}
                        </a>
                    );
                })}
            </article>
        </main>
    );
}

export default Home;
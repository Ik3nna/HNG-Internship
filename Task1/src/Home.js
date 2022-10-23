import React from "react";
import ShareBtn from "./shareBtn";
import { links } from "./data";

function Home() {
    
    return(
        <main>
            {/* Profile Section */}
            <img src="/assets/profile__img.png" alt="profile_img" />

            <ShareBtn />

            <p>_Ik3nna</p>
            <p>ikenna</p>

            {/* Links section */}
            <article className="links-container">
                {links.map((link)=>{
                    const { id, name, linkTo } = link;
                    return(
                        <a key={id} href={linkTo} target="_blank">
                            {name}
                        </a>
                    );
                })}
            </article>
        </main>
    );
}

export default Home;
import React from "react";
import { links } from "./data";

function Home() {
    return(
        <main>
            {/* Profile Section */}
            <img src="/assets/profile__img.png" alt="profile_img" />

            <p>_Ik3nna</p>
            <p>ikenna</p>

            {/* Links section */}
            <article className="links-container">
                {links.map((link)=>{
                    const { name, linkTo } = link;
                    return(
                        <a href={linkTo} target="_blank">
                            {name}
                        </a>
                    );
                })}
            </article>
        </main>
    );
}

export default Home;
import React from "react";
import ShareBtn from "./shareBtn";
import { links } from "./data";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";

function Home() {
    
    return(
        <main>
            {/* Profile Section */}
            <img src="/assets/IMG_1495.JPG" id="profile__img" alt="profile_img" />

            <ShareBtn />

            <p id="twitter">_Ik3nna</p>
            <p id="slack">Nduks</p>

            {/* Links section */}
            <article className="links-container">
                {links.map((link)=>{
                    const { id, name, linkTo } = link;
                    return(
                        <a key={id} id={id} href={linkTo} rel="noreferrer" target="_blank">
                            {name}
                        </a>
                    );
                })}

                <Link to="/contact" id="contact">
                    Contact Me
                </Link>
            </article>

            <div className="footer-icons">
                <img src="/assets/slack.svg" alt="slack-icon" />
                <GrGithub size="23px" />
            </div>
        </main>
    );
}

export default Home;
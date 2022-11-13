import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
           <img src="/assets/logo.svg" alt="logo" />

            <nav>
                <ul className="d-flex align-items-center mt-4">
                    <li>
                        <NavLink to="/home" className={({isActive})=> isActive ? "activeLink" : null}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/place" className={({isActive})=> isActive ? "activeLink" : null}>
                            Place to stay
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/nfts" className={({isActive})=> isActive ? "activeLink" : null}>
                            NFTs
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/community" className={({isActive})=> isActive ? "activeLink" : null}>
                            Community
                        </NavLink>
                    </li>

                    <li>
                        <button>
                            Connect wallet
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="overlay"></div>
            
            <div className="hamburger-menu">
                <div className="bar"></div>
            </div>
        </header>
    );
}

export default Header;
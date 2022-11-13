import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useSticky from "./utils";

function Header() {
    const { sticky, stickyRef } = useSticky();
    const [active, setActive] = useState(false);

    return(
        <>
            <header ref={stickyRef} className={`${active && "active"} ${sticky && "fixed-nav"}`}>
                <div className="head">
                    <Link to="/" className="logo">
                        <img src="/assets/logo.svg" alt="logo" className="img-logo" />
                    </Link>

                    <nav>
                        <ul className="mt-4">
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
                    
                    <div className="hamburger-menu" onClick={()=>setActive(!active)}>
                        <div className="bar"></div>
                    </div>
                </div>
            </header>

            <div style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
            }} />
        </>
    );
}

export default Header;
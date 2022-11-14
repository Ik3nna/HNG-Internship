import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im"
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {

    return(
        <footer>
            <article>
                <div>
                    <Link to="/">
                        <img className="img-logo" src="/assets/footer-logo.svg" alt="footer-logo" />
                    </Link>

                    <div className="icons mt-5">
                        <ImFacebook color="#F7F7F7"  />
                        <FaInstagram color="#F7F7F7" className="insta" />
                        <FaTwitter color="#F7F7F7" />
                    </div>

                    <p className="mt-5">&copy; 2022 Metabnb</p>
                </div>

                <div>
                    <h6>Community</h6>
                    <a href="/#">NFT</a>
                    <a href="/#">Tokens</a>
                    <a href="/#">Landlords</a>
                    <a href="/#">Discord</a>
                </div>

                <div>
                    <h6>Places</h6>
                    <a href="/#">Castle</a>
                    <a href="/#">Farms</a>
                    <a href="/#">Beach</a>
                    <a href="/#">Learn more</a>
                </div>

                <div>
                    <h6>About us</h6>
                    <a href="/#">Road map</a>
                    <a href="/#">Creators</a>
                    <a href="/#">Career</a>
                    <a href="/#">Contact us</a>
                </div>
            </article>
        </footer>
    );
}

export default Footer;
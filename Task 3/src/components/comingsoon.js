import React from "react";
import { Link } from "react-router-dom";

function ComingSoon () {

    return(
        <section className="soon">
            <h2>Coming <span>Soon</span>...</h2>

            <Link to="/">
                Back to home page
            </Link>

        </section>
    );
}

export default ComingSoon;

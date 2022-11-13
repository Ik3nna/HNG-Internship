import React from "react";
import { RWebShare } from "react-web-share";

function ShareBtn() {
    const url = window.location.href;

    return(
        <RWebShare data={{
            text: "Share Button",
            url: url,
            title: "My Links"
        }}
        onClick={()=> console.log("shared successfully")}
        >
            <button>
                <div className="icons">
                    <img src="/assets/Icon.png" alt="share-button" />
                    <img src="/assets/Mobile_Icon.png" alt="share_button" />
                </div>
            </button>
        </RWebShare>
    );
}

export default ShareBtn;
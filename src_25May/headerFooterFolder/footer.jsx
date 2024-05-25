import React from "react";
import Clock from "./clock"; 
import "./headerFooterStyle.css";

function Footer() {
    const websiteName = " Our website";
    return (
        <footer>
            <hr />
            <p>
                &copy; {new Date().getFullYear()} {websiteName}
            </p>
            <div className="clockContainer">
                <time>
                    <Clock />
                </time>
            </div>
        </footer>
    );
}

export default Footer;

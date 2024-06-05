import React from "react";
import Clock from "./clock";
import { Link } from "react-router-dom";
import {
    externalLinks,
    presentation,
    copyright,
    contactInfo,
} from "./hfsData.jsx";
import "./hfsStyle.css";

// Containing additional content: presentation, copyright, company name, contact info, and links to external sources.
// For SEO purposes.
function Footer() {
    // Function to render a serie of external links.
    // The key attribute determines the uniqueness of each element as an identifier.
    function renderLinks() {
        return externalLinks.map((link, index) => (
            <Link to={link.url} key={index}>
                {link.site}
            </Link>
        ));
    }

    function renderContactInfo() {
        return contactInfo.map((info, index) => (
            <div key={index}>
                <p>{info.text}</p>
                <img src={info.icon} alt={info.alt}></img>
            </div>
        ));
    }

    // For each array element, create one term and one definition HTML element and let their contents be the values of each key.
    function renderPresentation() {
        return presentation.map((item, index) => (
            <div key={index}>
                <dt>{item.dt}</dt>
                <dd>{item.dd}</dd>
            </div>
        ));
    }

    return (
        <footer>
            <hr />
            <div className="footer">
                <div className="links-contact">
                    <div className="external-links">{renderLinks()}</div>
                    <div className="contact-info">{renderContactInfo()}</div>
                </div>
                <div className="presentation">{renderPresentation()}</div>
                <div className="copyright">{copyright}</div>
                <div className="clock-container">
                    <time>
                        <Clock />
                    </time>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

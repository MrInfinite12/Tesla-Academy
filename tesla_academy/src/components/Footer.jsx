import React from "react";
import "./style/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2023 Tesla^Academy. All rights reserved.</p>
            <ul className="social-links">
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
            </ul>
        </footer>
    );
};

export default Footer;

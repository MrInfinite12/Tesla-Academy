import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/NavBar.css";

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">Tesla^Academy</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                        <Link to="/courses">Courses</Link>
                        {showDropdown && (
                            <ul className="dropdown">
                                <li><Link to="/courses/web">Web Development</Link></li>
                                <li><Link to="/courses/data">Data Science</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

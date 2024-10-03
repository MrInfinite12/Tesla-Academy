import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="bg-white flex justify-between p-2 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="logo">
                    <Link to="/" className="text-2xl font-bold text-red-600">Tesla^Academy</Link>
                </div>
                <ul className="list-none flex gap-5">
                    <li>
                        <Link to="/" className="text-lg text-red-600 hover:text-yellow-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-lg text-red-600 hover:text-yellow-500">About</Link>
                    </li>
                    <li 
                        onMouseEnter={handleDropdown} 
                        onMouseLeave={handleDropdown} 
                        className="relative"
                    >
                        <Link to="/courses" className="text-lg text-red-600 hover:text-yellow-500">Courses</Link>
                        {showDropdown && (
                            <ul className="absolute bg-white p-2 rounded-lg shadow-md mt-1">
                                <li>
                                    <Link to="/courses/web" className="block text-red-600 hover:text-yellow-500 py-1">Web Development</Link>
                                </li>
                                <li>
                                    <Link to="/courses/data" className="block text-red-600 hover:text-yellow-500 py-1">Data Science</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/contact" className="text-lg text-red-600 hover:text-yellow-500">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

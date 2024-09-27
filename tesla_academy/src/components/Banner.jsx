import React from "react";
import "./style/Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Upgrade Your Skills with Tesla^Academy</h1>
                <p>Join the best courses and become job-ready.</p>
                <a href="#courses" className="btn-primary">Explore Courses</a>
            </div>
        </div>
    );
};

export default Banner;

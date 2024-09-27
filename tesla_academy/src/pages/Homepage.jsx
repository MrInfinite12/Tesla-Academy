import React from "react";
import './style/Homepage.css'
import Banner from "../components/Banner";
import Courses from "../components/Courses";
import About from "../components/About";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Courses />
            <About />
            <Testimonials />
        </div>
    );
};

export default HomePage;

import React from "react";
import "./style/Courses.css";

const Courses = () => {
    const courses = [
        { title: "Web Development", description: "Learn HTML, CSS, JavaScript, and React.", img: "web-development.jpg" },
        { title: "Data Science", description: "Master Python, Machine Learning, and Data Analysis.", img: "data-science.jpg" },
        { title: "Android Development", description: "Build mobile apps with Java and Kotlin.", img: "android-development.jpg" },
    ];

    return (
        <section id="courses" className="courses">
            <h2>Our Courses</h2>
            <div className="course-list">
                {courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <img src={course.img} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;

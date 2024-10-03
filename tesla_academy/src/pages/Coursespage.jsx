import React from "react";

const Courses = () => {
    const courses = [
        { title: "Web Development", description: "Learn HTML, CSS, JavaScript, and React.", img: "web-development.jpg" },
        { title: "Data Science", description: "Master Python, Machine Learning, and Data Analysis.", img: "data-science.jpg" },
        { title: "Android Development", description: "Build mobile apps with Java and Kotlin.", img: "android-development.jpg" },
    ];

    return (
        <section id="courses" className="py-12 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-10">Our Courses</h2>
            <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition">
                        <img src={course.img} alt={course.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600">{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;

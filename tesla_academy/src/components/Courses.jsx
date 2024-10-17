import React, { useState } from "react";
import { Button } from '@chakra-ui/react'; 

const Courses = () => {
    const courseData = {
        "10th Standard": [
            { title: "Mathematics", description: "Comprehensive Mathematics Course.", img: "https://img.freepik.com/free-vector/math-chalkboard-background_23-2148152441.jpg?size=626&ext=jpg" },
            { title: "Science", description: "Explore Physics, Chemistry, and Biology.", img: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?cs=srgb&dl=pexels-pixabay-256262.jpg&fm=jpg" },
            { title: "Social Studies", description: "Understand history, geography, and civics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufHxyouqGOr-mDlQ3DLHM_KHwgLZT0bL4yw&s" }
        ],
        "11th Standard": [
            { title: "Physics", description: "Advanced concepts in Physics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghKB3Ya-luw5TxC0p0nFbgaItKrtypvBwIg&s" },
            { title: "Chemistry", description: "In-depth study of Chemical reactions.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUtVZLjw79DIRKSvEgjxRlQCHXYNXreMVbQ&s" },
            { title: "Mathematics", description: "Higher-level Mathematics for 11th grade.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZzSRwQ1jr_axSVfLd8uPHlg--yqZmyZc1Q&s" }
        ],
        "Web Developers Options": [
            { title: "Web Development", description: "Make good web interface", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6URgtIDVLfFVfBIuVZ5heEyCv35xrBCBWg&s" }
        ],
    };

    // State to track current index for each section
    const [currentIndexes, setCurrentIndexes] = useState({
        "10th Standard": 0,
        "11th Standard": 0,
        "Web Developers Options": 0,
    });

    // Track the currently hovered section
    const [hoveredSection, setHoveredSection] = useState(null);

    // Function to move to the next course
    const handleNext = () => {
        if (hoveredSection) {
            setCurrentIndexes((prevIndexes) => ({
                ...prevIndexes,
                [hoveredSection]: (prevIndexes[hoveredSection] + 1) % courseData[hoveredSection].length,
            }));
        }
    };

    // Function to move to the previous course
    const handlePrev = () => {
        if (hoveredSection) {
            setCurrentIndexes((prevIndexes) => ({
                ...prevIndexes,
                [hoveredSection]:
                    prevIndexes[hoveredSection] === 0
                        ? courseData[hoveredSection].length - 1
                        : prevIndexes[hoveredSection] - 1,
            }));
        }
    };

    return (
        <section id="courses" className="py-12 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-10">Our Courses</h2>
            <div className="container mx-auto px-4">
                {Object.entries(courseData).map(([className, courses]) => (
                    <div
                        key={className}
                        className="mb-12 relative"
                        onMouseEnter={() => setHoveredSection(className)}
                        onMouseLeave={() => setHoveredSection(null)}
                    >
                        <h3 className="text-3xl font-semibold mb-6">{className}</h3>
                        <div className="flex justify-center gap-6">
                            {courses.map((course, index) => {
                                const currentIndex = currentIndexes[className];
                                const isVisible =
                                    index === currentIndex;

                                return (
                                    <div
                                        key={index}
                                        className={`transition-transform duration-500 ease-in-out transform ${
                                            isVisible ? "scale-105" : "scale-90 opacity-50"
                                        }`}
                                        style={{
                                            width: "340px",
                                            height: "300px",
                                            display: isVisible ? "block" : "none",
                                        }}
                                    >
                                        <img
                                            src={course.img}
                                            alt={course.title}
                                            className="w-full h-48 object-cover mb-4 rounded-t-lg"
                                            style={{ height: "200px", width: "340px", objectFit: "cover" }}
                                        />
                                        <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                                        <p className="text-gray-600">{course.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Conditionally display navigation buttons only when the section is hovered */}
                        {hoveredSection === className && (
                            <>
                                {/* Previous Button */}
                                <button
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full"
                                    onClick={handlePrev}
                                >
                                    Prev
                                </button>

                                {/* Next Button */}
                                <button
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
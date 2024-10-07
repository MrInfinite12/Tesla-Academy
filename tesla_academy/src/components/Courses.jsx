import React from "react";

const Courses = () => {
    const courseData = {
        "10th Standard": [
            { title: "Mathematics", description: "Comprehensive Mathematics Course.", img: "https://img.freepik.com/free-vector/math-chalkboard-background_23-2148152441.jpg?size=626&ext=jpg" },
            { title: "Science", description: "Explore Physics, Chemistry, and Biology.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BLCUjWHRGEpaRywmhxKA_Nk64lO8eNEiHQ&s" },
            { title: "Social Studies", description: "Understand history, geography, and civics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufHxyouqGOr-mDlQ3DLHM_KHwgLZT0bL4yw&s" }
        ],
        "11th Standard": [
            { title: "Physics", description: "Advanced concepts in Physics.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCdB4MAcPCvkev9HHe-Hizm5UDtFhbQYN_KQ&s" },
            { title: "Chemistry", description: "In-depth study of Chemical reactions.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUdweuXZ0DAgxuXhmvUKOXoJvG8In9KQnsQ&s" },
            { title: "Mathematics", description: "Higher-level Mathematics for 11th grade.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUnftD70oeohBxui2MnojZH2AG4FlUnKjJA&s" }
        ],
        "Web Developers Options": [
            { title: "Web Development", description: "Make good web interface", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVn1FwPcoPoNAlT_PE8eLts7pcl_WHOKvvHw&s" }
        ],
    };

    return (
        <section id="courses" className="py-12 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-10">Our Courses</h2>
            <div className="container mx-auto px-4">
                {Object.entries(courseData).map(([className, courses]) => (
                    <div key={className} className="mb-12">
                        <h3 className="text-3xl font-semibold mb-6">{className}</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {courses.map((course, index) => (
                                <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg shadow hover:shadow-lg transition">
                                    <img
                                        src={course.img}
                                        alt={course.title}
                                        className="w-full h-48 object-cover mb-4 rounded-t-lg"
                                        style={{ height: '200px', width: '340px', objectFit: 'cover' }}
                                    />
                                    <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                                    <p className="text-gray-600">{course.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;

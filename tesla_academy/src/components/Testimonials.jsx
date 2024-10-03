import React from "react";

const Testimonials = () => {
    const testimonials = [
        { name: "John Doe", review: "Great learning experience, the instructors are amazing." },
        { name: "Jane Smith", review: "The courses are comprehensive and easy to follow." },
        { name: "Michael Johnson", review: "I got a job right after completing the course." },
    ];

    return (
        <section id="testimonials" className="py-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                        <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                        <h4 className="text-lg font-semibold text-right">- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

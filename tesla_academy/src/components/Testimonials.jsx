import React from "react";
import "./style/Testimonials.css";

const Testimonials = () => {
    const testimonials = [
        { name: "John Doe", review: "Great learning experience, the instructors are amazing." },
        { name: "Jane Smith", review: "The courses are comprehensive and easy to follow." },
        { name: "Michael Johnson", review: "I got a job right after completing the course." },
    ];

    return (
        <section id="testimonials" className="testimonials">
            <h2>What Our Students Say</h2>
            <div className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p>{testimonial.review}</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

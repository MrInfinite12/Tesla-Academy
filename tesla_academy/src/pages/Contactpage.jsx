import React from "react";

const ContactPage = () => {
    return (
        <div className="text-center py-12">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-4">Email: contact@Tesla^Academy.com</p>
            <p className="text-lg mb-6">Phone: +1234567890</p>
            <form className="max-w-xl mx-auto text-left">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <textarea 
                    placeholder="Your Message" 
                    rows="4" 
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <button 
                    type="submit" 
                    className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;

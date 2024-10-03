import React from "react";

const Banner = () => {
    return (
        <div className="bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center" 
             style={{ backgroundImage: "url('https://imgs.search.brave.com/ZEZp68lpORjXVJbYarVsnhRLGsdmDesj0uS6wIc5AoQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXlvdW5nLXN0/dWRlbnRzLWF0dGVu/ZGluZy1zY2hvb2xf/MjMtMjE1MDkxMTU2/NS5qcGc_c2l6ZT02/MjYmZXh0PWpwZw')" }}>
            <div className="banner-content">
                <h1 className="text-5xl mb-5">Upgrade Your Skills with Tesla^Academy</h1>
                <p className="text-2xl mb-7">Join the best courses and become job-ready.</p>
                <a href="#courses" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                    Explore Courses
                </a>
            </div>
        </div>
    );
};

export default Banner;

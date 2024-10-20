"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

// Sample course data with high-definition images
const courseData = {
  "10th Standard": [
    {
      title: "Mathematics",
      description: "Comprehensive Mathematics Course.",
      img: "https://img.freepik.com/free-vector/math-chalkboard-background_23-2148152441.jpg?size=626&ext=jpg",
    },
    {
      title: "Science",
      description: "Explore Physics, Chemistry, and Biology.",
      img: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?cs=srgb&dl=pexels-pixabay-256262.jpg&fm=jpg",
    },
    {
      title: "English",
      description: "Master the English language and literature.",
      img: "https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?cs=srgb&dl=pexels-pixabay-261909.jpg&fm=jpg",
    },
    {
      title: "Social Studies",
      description: "Learn history, geography, and civics.",
      img: "https://images.pexels.com/photos/159832/social-studies-books-159832.jpeg?cs=srgb&dl=pexels-pixabay-159832.jpg&fm=jpg",
    },
  ],
  "12th Standard": [
    {
      title: "Physics",
      description: "In-depth study of Physics concepts.",
      img: "https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?cs=srgb&dl=pexels-pixabay-256302.jpg&fm=jpg",
    },
    {
      title: "Chemistry",
      description: "Understand chemical reactions and compounds.",
      img: "https://images.pexels.com/photos/301743/pexels-photo-301743.jpeg?cs=srgb&dl=pexels-pixabay-301743.jpg&fm=jpg",
    },
    {
      title: "Biology",
      description: "Explore the human body and living organisms.",
      img: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?cs=srgb&dl=pexels-pixabay-356040.jpg&fm=jpg",
    },
    {
      title: "Mathematics",
      description: "Advanced Mathematics for high school.",
      img: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?cs=srgb&dl=pexels-pixabay-164821.jpg&fm=jpg",
    },
  ],
  "Computer Engineering": [
    {
      title: "Data Structures and Algorithms",
      description: "Understand the fundamental concepts of data structures and algorithms, focusing on problem-solving techniques and efficiency.",
      img: "https://images.pexels.com/photos/1597113/pexels-photo-1597113.jpeg?cs=srgb&dl=pexels-pixabay-1597113.jpg&fm=jpg",
    },
    {
      title: "Digital Logic Design",
      description: "Learn the principles of digital systems and how to design circuits using combinational and sequential logic.",
      img: "https://images.pexels.com/photos/256448/pexels-photo-256448.jpeg?cs=srgb&dl=pexels-pixabay-256448.jpg&fm=jpg",
    },
    {
      title: "Operating Systems",
      description: "Explore the concepts of operating systems, including process management, memory management, and system calls.",
      img: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?cs=srgb&dl=pexels-pixabay-267614.jpg&fm=jpg",
    },
    {
      title: "Computer Networks",
      description: "Gain knowledge of networking principles, protocols, and architectures that enable communication between computers.",
      img: "https://images.pexels.com/photos/4603239/pexels-photo-4603239.jpeg?cs=srgb&dl=pexels-anthony-raphael-4603239.jpg&fm=jpg",
    },
    {
      title: "Software Engineering",
      description: "Learn software development methodologies, project management, and best practices for designing reliable software systems.",
      img: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?cs=srgb&dl=pexels-jessica-lewis-3184295.jpg&fm=jpg",
    },
    {
      title: "Database Management Systems",
      description: "Understand database design, SQL, and the principles of managing data effectively in modern applications.",
      img: "https://images.pexels.com/photos/3825496/pexels-photo-3825496.jpeg?cs=srgb&dl=pexels-fauxels-3825496.jpg&fm=jpg",
    },
    {
      title: "Artificial Intelligence",
      description: "Explore the concepts and techniques of AI, including machine learning, neural networks, and natural language processing.",
      img: "https://images.pexels.com/photos/1181688/pexels-photo-1181688.jpeg?cs=srgb&dl=pexels-lukas-1181688.jpg&fm=jpg",
    },
    {
      title: "Web Development",
      description: "Learn the basics of web development, including HTML, CSS, JavaScript, and frameworks for building modern web applications.",
      img: "https://images.pexels.com/photos/1741854/pexels-photo-1741854.jpeg?cs=srgb&dl=pexels-rahul-ravichandran-1741854.jpg&fm=jpg",
    },
  ],
  "Machine Learning": [
    {
      title: "Machine Learning",
      description: "Dive into the fundamentals of machine learning, covering supervised and unsupervised learning techniques, algorithms, and real-world applications.",
      img: "https://images.pexels.com/photos/5905600/pexels-photo-5905600.jpeg?cs=srgb&dl=pexels-joshua-evans-5905600.jpg&fm=jpg",
    },
    {
      title: "Cybersecurity",
      description: "Learn about the principles of cybersecurity, including network security, encryption, threat modeling, and risk management.",
      img: "https://images.pexels.com/photos/5955495/pexels-photo-5955495.jpeg?cs=srgb&dl=pexels-anna-shvets-5955495.jpg&fm=jpg",
    },
    {
      title: "Cloud Computing",
      description: "Explore the concepts of cloud computing, including service models (IaaS, PaaS, SaaS), cloud architecture, and deployment strategies.",
      img: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?cs=srgb&dl=pexels-jessica-lewis-3184295.jpg&fm=jpg",
    },
  ],
  "Mobile App Development": [
    {
      title: "Mobile App Development",
      description: "Gain skills in developing mobile applications for Android and iOS platforms using popular frameworks and programming languages.",
      img: "https://images.pexels.com/photos/4107864/pexels-photo-4107864.jpeg?cs=srgb&dl=pexels-anton-zhlenkov-4107864.jpg&fm=jpg",
    },
    {
      title: "Human-Computer Interaction",
      description: "Study the design and evaluation of user interfaces, focusing on how humans interact with computers and software.",
      img: "https://images.pexels.com/photos/1181706/pexels-photo-1181706.jpeg?cs=srgb&dl=pexels-lukas-1181706.jpg&fm=jpg",
    },
    {
      title: "Game Development",
      description: "Learn the principles of game design, development, and programming, including graphics and gameplay mechanics.",
      img: "https://images.pexels.com/photos/5998122/pexels-photo-5998122.jpeg?cs=srgb&dl=pexels-alexey-savchenko-5998122.jpg&fm=jpg",
    },
    {
      title: "Robotics",
      description: "Explore the fundamentals of robotics, including robot design, sensors, control systems, and applications in various fields.",
      img: "https://images.pexels.com/photos/4059778/pexels-photo-4059778.jpeg?cs=srgb&dl=pexels-anthony-raphael-4059778.jpg&fm=jpg",
    },
    {
      title: "Embedded Systems",
      description: "Understand the design and programming of embedded systems, focusing on microcontrollers and real-time operating systems.",
      img: "https://images.pexels.com/photos/2728870/pexels-photo-2728870.jpeg?cs=srgb&dl=pexels-mikhail-nilov-2728870.jpg&fm=jpg",
    },
  ],
};

// HoverEffect Component
const HoverEffect = ({ children }) => {
  return (
    <div 
    className="relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      {children}
    </div>
  );
};

// Carousel Component for Courses
const Carousel = ({ items }) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll py-10 scroll-smooth"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row gap-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              key={index}
              className="rounded-3xl w-80"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="h-10 w-10 bg-gray-100 rounded-full"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button
          className="h-10 w-10 bg-gray-100 rounded-full"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

// Courses Component
export function Courses() {
  return (
    <section id="courses" className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">COURSES</h2>
      <div className="container mx-auto px-4">
        {Object.entries(courseData).map(([className, courses]) => (
          <div key={className} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{className}</h3>
            <Carousel
              items={courses.map((course, index) => (
                <HoverEffect key={index}>
                  <div className="relative w-80 h-60 overflow-hidden rounded-lg shadow-lg transition-transform duration-300">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 p-4 bg-black bg-opacity-50 h-full flex flex-col justify-center">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {course.title}
                      </h4>
                      <p className="text-gray-200">{course.description}</p>
                    </div>
                  </div>
                </HoverEffect>
              ))}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

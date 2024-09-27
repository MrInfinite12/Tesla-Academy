import React from 'react'; // Import React
import NavBar from './components/NavBar'; // Import your NavBar component
import Footer from './components/Footer'; // Import your Footer component
import HomePage from './pages/Homepage'; // Import the HomePage component
import AboutPage from './pages/Aboutpage'; // Import the AboutPage component
import CoursesPage from './pages/Coursespage'; // Import the CoursesPage component
import ContactPage from './pages/Contactpage'; // Import the ContactPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router for routing

import './App.css'; // Import global CSS

function App() {
  return (
    <div className="App">
      <Router>
        {/* Render the NavBar at the top */}
        <NavBar />

        {/* Define the routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page route */}
          <Route path="/about" element={<AboutPage />} /> {/* About page route */}
          <Route path="/courses" element={<CoursesPage />} /> {/* Courses page route */}
          <Route path="/contact" element={<ContactPage />} /> {/* Contact page route */}
        </Routes>

        {/* Render the Footer at the bottom */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

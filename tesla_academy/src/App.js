
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage'; 
import CoursesPage from './pages/Coursespage';
import Login from './pages/Login'; // Import the Login component
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/login" element={<Login />} />  {/* Add the route for Login page */}
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default App;

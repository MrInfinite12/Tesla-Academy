
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage'; 
<<<<<<< HEAD
<<<<<<< Updated upstream

function App() {
    return (
        <div className="App">
            <HomePage />
        </div>
=======
import CoursesPage from './pages/Coursespage';
import Login from './pages/Login'; // Import the Login component
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    return (
=======
import CoursesPage from './pages/Coursespage';
import LoginPage from './pages/LoginPage'; // Import the Login component
import RegisterPage from './pages/RegisterPage';
import AboutusPage from './pages/AboutusPage';
import ContactPage from './pages/ContactPage';
import ForumPage from './pages/ForumPage';

function App() {
    return (
>>>>>>> f9f9e9e931274122b976e5f175d778145d977934
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
<<<<<<< HEAD
                <Route path="/login" element={<Login />} />  {/* Add the route for Login page */}
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                
            </Routes>
        </Router>
>>>>>>> Stashed changes
=======
                <Route path="/login" element={<LoginPage />} />  {/* Add the route for Login page */}
                <Route path="/registerPage" element={<RegisterPage/>} />  {/* Add the route for Register page */}
                <Route path='/contact' element={<ContactPage/>}/>
                <Route path='/aboutus' element={<AboutusPage/>}/>
                <Route path='/forum' element={<ForumPage/>}/>
            </Routes>
        </Router>
>>>>>>> f9f9e9e931274122b976e5f175d778145d977934
    );
}

export default App;

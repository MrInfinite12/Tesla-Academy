import React from 'react';
import HomePage from './pages/Homepage'; 
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
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/login" element={<Login />} />  {/* Add the route for Login page */}
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                
            </Routes>
        </Router>
>>>>>>> Stashed changes
    );
}

export default App;

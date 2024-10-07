import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
import HomePage from './pages/Homepage'; 
import CoursesPage from './pages/Coursespage';
import Login from './pages/Login';

function App() {
    return (
        <Router>  {/*}  <div className="App">
            <HomePage />
        </div> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;

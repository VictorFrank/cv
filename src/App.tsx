import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Hobbies from "./pages/hobbies/Hobbies";
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

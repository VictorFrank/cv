import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                {/*Header navigator here*/}
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                {/*Footer here*/}
            </div>
        </Router>
    );
}

export default App;

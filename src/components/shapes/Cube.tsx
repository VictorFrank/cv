import React from 'react';
import './Cube.css';

const Cube = () => {
    return (
        <div className="cube">
            <div className="face front">Background</div>
            <div className="face back"></div>
            <div className="face left">Hobbies</div>
            <div className="face right">Hobbies</div>
            <div className="face top">Education</div>
            <div className="face bottom">Education</div>
        </div>
    );
};

export default Cube;

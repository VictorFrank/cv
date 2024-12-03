import React from 'react';
import './Cube.css';

const Cube = () => {
    return (
        <div className="cube">
            <div className="face front">Music</div>
            <div className="face back"></div>
            <div className="face left">Style</div>
            <div className="face right">Style</div>
            <div className="face top">Games</div>
            <div className="face bottom">Games</div>
        </div>
    );
};

export default Cube;

import React from 'react';
import './Cube.css';

const Cube = () => {
    return (
        <div className="cube">
            <div className="face front">Music</div>
            <div className="face back"></div>
            <div className="face left">Games</div>
            <div className="face right">Games</div>
            <div className="face top">CTF</div>
            <div className="face bottom">CTF</div>
        </div>
    );
};

export default Cube;

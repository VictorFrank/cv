import React from 'react';
import './RotatingThing.css';

export const RotatingLine = () => {
    const squares = Array.from({ length: 63 }, (_, i) => i); // Creates 8 squares

    return (
        <div className="rotating-container">
            {squares.map((i) => (
                <div
                    className="rotating-line"
                    style={{ animationDelay: `${i * 0.2}s` }} // Stagger each square's start time by 0.5 seconds
                    key={i}
                ></div>
            ))}
        </div>
    );
};



export const RotatingTriangle = () => {
    const squares = Array.from({ length: 64 }, (_, i) => i); // Creates 8 squares

    return (
        <div className="rotating-container">
            {squares.map((i) => (
                <div
                    className="rotating-triangle"
                    style={{ animationDelay: `${i * 0.1}s` }} // Stagger each square's start time by 0.5 seconds
                    key={i}
                ></div>
            ))}
        </div>
    );
}

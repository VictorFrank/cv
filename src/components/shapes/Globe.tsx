import React from 'react';

const Globe = () => {
    const latitudes = [-60, -40, -20, 0, 20, 40, 60].map((offset, index) => (
        <path
            key={`lat-${index}`}
            d={`M 10 100 Q 100 ${100 + offset} 190 100`}
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
        />
    ));

    // Generate longitude paths
    const longitudes = [-60, -30, 0, 30, 60].map((offset, index) => (
        <path
            key={`long-${index}`}
            d={`M ${100 + offset} 10 Q 100 100 ${100 + offset} 190`}
            stroke="#FFFFFF"
            strokeWidth="1"
            fill="none"
        />
    ));

    return (
        <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            {latitudes}
            {longitudes}
            <circle cx="100" cy="100" r="60" stroke="#FFFFFF" strokeWidth="1" fill="none" />
            <circle cx="100" cy="100" r="30" stroke="#FFFFFF" strokeWidth="1" fill="none" />
        </svg>
    );
};

export default Globe;

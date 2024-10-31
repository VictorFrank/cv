import React from 'react';

const Square = () => {
    return (
    <svg width="200" height="200" style={{animation: "rotate 5s linear infinite"}}>
        <rect x="50" y="50" width="100" height="100" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <style>{`
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
    </svg>
    );
}

export default Square;
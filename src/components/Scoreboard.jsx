// src/components/Scoreboard.jsx
import React from 'react';

const Scoreboard = ({ score }) => {
    return (
        <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '24px', color: 'black' }}>
            Score: {score}
        </div>
    );
};

export default Scoreboard;

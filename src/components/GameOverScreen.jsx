// src/components/GameOverScreen.jsx
import React from 'react';
import '../styles/gameover.css';

const GameOverScreen = ({ score, restartGame }) => {
    return (
        <div className="game-over-screen">
            <div className="game-over-title">GAME OVER</div>
            <div className="score">Score: {score}</div>
            <button className="restart-button" onClick={restartGame}>
                RESTART
            </button>
        </div>
    );
};

export default GameOverScreen;

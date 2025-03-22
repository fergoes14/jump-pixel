import React from 'react';
import '../styles/startscreen.css';

const StartScreen = ({ startGame, score }) => {
    return (
        <div className="start-screen">
            <div className="game-title">JUMP PIXEL</div>
            {score > 0 && (
                <div className="score">Última Pontuação: {score}</div> // Exibe a última pontuação
            )}
            <button className="play-button" onClick={startGame}>
                PLAY
            </button>
        </div>
    );
};

export default StartScreen;

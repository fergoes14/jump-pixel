import React, { useState } from 'react';
import Game from './components/Game';
import StartScreen from './components/StartScreen';

const App = () => {
    const [gameStarted, setGameStarted] = useState(false); // Estado para controlar a tela do jogo
    const [score, setScore] = useState(0); // Estado para armazenar a pontuação

    const startGame = () => {
        setGameStarted(true); // Inicia o jogo
    };

    const endGame = (finalScore) => {
        setScore(finalScore); // Armazena a pontuação final ao fim do jogo
        setGameStarted(false); // Volta para a tela inicial
    };

    return (
        <div className="app">
            {!gameStarted ? (
                <StartScreen startGame={startGame} score={score} /> // Passa a pontuação para a tela inicial
            ) : (
                <Game endGame={endGame} /> // Passa a função de finalizar o jogo
            )}
        </div>
    );
};

export default App;

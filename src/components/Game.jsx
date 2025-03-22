import React, { useState, useEffect } from 'react';
import Bird from './Bird';
import Pipe from './Pipe';
import Scoreboard from './Scoreboard';
import '../styles/game.css';

const GRAVITY = 0.5;
const JUMP = -8;
const PIPE_SPEED = 3;
const PIPE_WIDTH = 50;
const BIRD_SIZE = 70;
const GAP = 200; // Espaço entre os canos superior e inferior

const Game = ({ endGame }) => { // Recebe a função endGame como props
    const [birdY, setBirdY] = useState(window.innerHeight / 2);
    const [velocity, setVelocity] = useState(0);
    const [pipes, setPipes] = useState([{ x: window.innerWidth, height: 150, bottomHeight: 200 }]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const checkCollision = () => {
        if (birdY + BIRD_SIZE >= window.innerHeight || birdY <= 0) {
            setGameOver(true);
        }

        pipes.forEach((pipe) => {
            const pipeBottomHeight = window.innerHeight - pipe.height - GAP;

            // Verificando colisão com o cano superior
            if (
                50 + BIRD_SIZE > pipe.x &&
                50 < pipe.x + PIPE_WIDTH &&
                birdY < pipe.height
            ) {
                setGameOver(true);
            }

            // Verificando colisão com o cano inferior
            if (
                50 + BIRD_SIZE > pipe.x &&
                50 < pipe.x + PIPE_WIDTH &&
                birdY + BIRD_SIZE > pipeBottomHeight
            ) {
                setGameOver(true);
            }

            // Contabilizando pontos quando o pássaro passa pelos canos
            if (pipe.x === 50) {
                setScore((prev) => prev + 1);
            }
        });
    };

    const handleJump = () => {
        if (!gameOver) setVelocity(JUMP);
    };

    const spawnPipes = () => {
        if (pipes.length === 0 || pipes[pipes.length - 1].x < window.innerWidth - 300) {
            const pipeTopHeight = Math.random() * (window.innerHeight / 2 - GAP); // Aleatório para cano superior
            const pipeBottomHeight = window.innerHeight - pipeTopHeight - GAP; // Cálculo para o cano inferior

            setPipes([
                ...pipes,
                {
                    x: window.innerWidth,
                    height: pipeTopHeight,
                    bottomHeight: pipeBottomHeight,
                },
            ]);
        }
    };

    // Atualiza a física do jogo
    useEffect(() => {
        const gameLoop = setInterval(() => {
            setBirdY((prev) => prev + velocity);
            setVelocity((prev) => prev + GRAVITY);
            setPipes((prev) =>
                prev
                    .map((pipe) => ({ ...pipe, x: pipe.x - PIPE_SPEED }))
                    .filter((pipe) => pipe.x > -PIPE_WIDTH)
            );
            spawnPipes(); // Criação de novos canos
        }, 30);

        return () => clearInterval(gameLoop);
    }, [velocity, pipes]);

    useEffect(() => {
        const collisionInterval = setInterval(checkCollision, 30);
        return () => clearInterval(collisionInterval);
    }, [birdY, pipes]);

    useEffect(() => {
        window.addEventListener('keydown', handleJump);
        return () => window.removeEventListener('keydown', handleJump);
    }, [handleJump]);

    useEffect(() => {
        if (gameOver) {
            endGame(score); // Passa a pontuação final para o App quando o jogo acabar
        }
    }, [gameOver, score, endGame]);

    return (
        <div className="game-container">
            <Scoreboard score={score} />
            {gameOver && <h2 className="game-over">Game Over! Press R to Restart</h2>}
            <Bird birdY={birdY} birdSize={BIRD_SIZE} />
            {pipes.map((pipe, index) => (
                <Pipe key={index} pipe={pipe} gap={GAP} windowHeight={window.innerHeight} />
            ))}
        </div>
    );
};

export default Game;

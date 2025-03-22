import React from 'react';

const Bird = ({ birdY, birdSize }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: `${birdY}px`,
                left: '50px',
                width: `${birdSize}px`,
                height: `${birdSize}px`,
                backgroundImage: 'url(https://i.imgur.com/fywvarW.png)', // Caminho para a imagem do sprite
                backgroundSize: 'contain', // Ajusta a imagem para se ajustar ao tamanho do div
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
            }}
        ></div>
    );
};

export default Bird;


// src/components/Pipe.jsx
import React from 'react';

const Pipe = ({ pipe, gap, windowHeight }) => {
    const { x, height } = pipe;
    const bottomHeight = windowHeight - height - gap;

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    left: `${x}px`,
                    top: '0px',
                    width: '50px',
                    height: `${height}px`,
                    backgroundImage: 'url(https://i.imgur.com/IOgE7MK.jpeg)', // Caminho para a imagem do sprite


                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    left: `${x}px`,
                    bottom: '0px',
                    width: '50px',
                    height: `${bottomHeight}px`,
                    backgroundImage: 'url(https://i.imgur.com/IOgE7MK.jpeg)', // Caminho para a imagem do sprite


                }}
            ></div>
        </>
    );
};

export default Pipe;

import React from 'react';

const GenreButton = ({ genre, onClick }) => {
    return (
        <button onClick={() => onClick(genre)}>
            {genre}
        </button>
    );
};

export default GenreButton;
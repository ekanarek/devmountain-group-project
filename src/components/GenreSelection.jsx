import React, { useState } from 'react';
import GenreButton from './GenreButton';

const GenreSelection = () => {
    const [selectedGenre, setSelectedGenre] = useState('');

    const genres = [
        'Rock',
        'Pop',
        'Hip-Hop',
        'Classical',
        'Jazz',
        'Electronic',
        'R-N-B',
        'Metal',

    ];

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div>
            <h2>What genres are you looking for?</h2>
            <div>
                {genres.map((genre) => (
                    <GenreButton
                    key={genre}
                    genre={genre}
                    onClick={handleGenreClick}
                    />
                ))}
            </div>
            {selectedGenre && <p>Youve selected: {selectedGenre}</p>}
        </div>
    );
};

export default GenreSelection;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyPlaylistMaker = () => {
    const [accessToken, setAccessToken] = useState('');
    const [genre, setGenre] = useState('hip-hop');
    const [energy, setEnergy] = useState(0);
    const [instrumentalness, setInstrumentalness] = useState(0);
    const [happiness, setHappiness] = useState(0);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const client_id = 'your_client_id';
        const client_secret = 'your_client_secret';

        const getAccessToken = async () => {
            const response = await axios.post('https://accounts.spotify.com/api/token', 
        'grant_type=client_credentials', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            }
        });
        setAccessToken(response.data.access_token);
        };

        getAccessToken();
    }, []);

    const fetchSongs = async () => {
        const response = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                seed_genres: genre,
                limit: 10,
                target_energy: energy,
                target_instrumentalness: instrumentalness,
                target_valence: happiness,
            }
        });
        setSongs(response.data.tracks);
    };
    return (
        <div>
            <h1>Sync Song Fetcher</h1>
            <div>
                <label>Select Genre: </label>
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    {/* figure out what genres we want here :) */}
                </select>
            </div>

            <div>
                <label>Energy!: {energy}</label>
                {/* Sliders here when I can figure them out why are they so silly */}
            </div>

        </div>
    )
}
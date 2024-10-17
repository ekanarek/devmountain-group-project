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
                'Authorization': 'Basic ' + btoa(client_id + ':' client_secret)
            }
        });
        setAccessToken(response.data.access_token);
        };

        getAccessToken();
    }, []
}
import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenContext";
import SavePlaylistButton from "../components/SavePlaylistButton";

export default function ResultsPage() {
  const { token, setToken } = useToken();
  const [results, setResults] = useState({
    tracks: [{ id: 1, name: "Loading", artists: [{ name: "Please wait" }] }],
  });

  const moodInput = {
    genre: "hip-hop",
    energy: 1.0,
    instrumentalness: 0.0,
    happiness: 0.0,
  };

  useEffect(() => {
    const fetchRecs = async (moodInput) => {
      const res = await axios.get(
        "https://api.spotify.com/v1/recommendations",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          params: {
            limit: 10,
            seed_genres: moodInput.genre,
            target_energy: moodInput.energy,
            target_instrumentalness: moodInput.instrumentalness,
            target_valence: moodInput.happiness,
          },
        }
      );
      setResults(res.data);
    };
    fetchRecs(moodInput);
  }, []);

  const addPlaylist = async (playlist) => {
    try {
      const res = await axios.post(
        "https://api.spotify.com/v1/users/{userIdHere}/playlists",
        {
          name: "New Playlist",
          description: "New playlist description",
          public: false,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res.data);
    } catch (error) {
      console.error(
        "Error creating playlist:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const songs = results.tracks.map(({ id, name, artists }) => {
    return (
      <li key={id}>
        {name}
        <br />
        {artists[0].name}
        <br />
        <br />
      </li>
    );
  });

  return (
    <>
      <ul>{songs}</ul>
      <SavePlaylistButton onClick={addPlaylist} />
    </>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenContext";

export default function ResultsPage() {
  const { token, setToken } = useToken();
  const [results, setResults] = useState({
    tracks: [{ id: 1, name: "Loading", artists: [{ name: "Please wait" }] }],
  });

  const moodInput = {
    genre: "country",
    energy: 0,
    instrumentalness: 0,
    happiness: 0,
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

  return <ul>{songs}</ul>;
}

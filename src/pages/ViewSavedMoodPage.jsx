import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenSliderContext";
import RedirectButton from "../components/RedirectButton";
import { useNavigate } from "react-router-dom";
import "../styles/ResultsPageStyles.css";
import "../styles/ViewSavedMoodPageStyles.css";

export default function ViewSavedMoodsPage({ mood, setSelectedMood }) {
  const navigate = useNavigate();

  const { token } = useToken();

  const [results, setResults] = useState({
    tracks: [{ id: 1, name: "Loading", artists: [{ name: "Please wait" }] }],
  });
  console.log(mood);
  const moodInput = mood;

  useEffect(() => {
    const fetchRecs = async () => {
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
    fetchRecs();
  }, []);

  const songs = results.tracks.map(({ id, name, artists }) => {
    return (
      <div className="song" key={id}>
        <div>{name}</div>
        <b>{artists[0].name}</b>
      </div>
    );
  });

  if (!token) {
    useEffect(() => {
      navigate("/");
    }, []);
  }

  return (
    <div>
      <div className="resultsInputAndButton">
        <div className="songResults">{songs}</div>
      </div>

      <RedirectButton
        buttonText={"Back to moods"}
        selectedMood={mood}
        setSelectedMood={setSelectedMood}
      />
    </div>
  );
}

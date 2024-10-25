import React from "react";
import { useState, useEffect } from "react";
import GenreButton from "../components/GenreButton";
import { useToken } from "../contexts/TokenSliderContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function GenrePage() {
  const sampleUserObject = {
    display_name: "Loading",
    email: "Loading",
  };

  const navigate = useNavigate();
  const { token, setToken, genre, setGenre } = useToken();
  const [serverData, setServerData] = useState(sampleUserObject);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const accessToken = urlParams.get("access_token");

  useEffect(() => {
    const getProfile = async (accessToken) => {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      setServerData(res.data);
    };
    getProfile(accessToken);
    setToken(accessToken);
  }, []);

  const genres = [
    "pop",
    "rock",
    "hip-hop",
    "classical",
    "jazz",
    "electronic",
    "r-n-b",
    "metal",
  ];

  const handleGenreClick = (genre) => {
    setGenre(genre);
    console.log(genre);
  };

  const handleNext = () => {
    navigate("/sliders");
  };

  return (
    <div>
      <h2>What genre are you looking for?</h2>
      <div>
        {genres.map((genre) => (
          <GenreButton key={genre} genre={genre} onClick={handleGenreClick} />
        ))}
      </div>
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

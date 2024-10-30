import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenSliderContext";
import RedirectButton from "../components/RedirectButton";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/ResultsPageStyles.css";

export default function ResultsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  // State passed from SavedMoodsTable, if any
  const savedParameters = state?.parameters;

  const {
    token,
    genre,
    energyValue,
    instValue,
    hapValue,
    moodName,
    setMoodChanged,
  } = useToken();

  const [user, setUser] = useState({ userId: "", displayName: "" });

  const [results, setResults] = useState({
    tracks: [{ id: 1, name: "Loading", artists: [{ name: "Please wait" }] }],
  });

  const moodInput = savedParameters || {
    genre: genre,
    energy: energyValue / 10,
    instrumentalness: instValue / 10,
    happiness: hapValue / 10,
    name: moodName,
  };

  useEffect(() => {
    const fetchMood = async (mood) => {};
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
    <div className="desktopResults">
      <div className="resultsSynclogo1Parent">
        <Header height="42rem" />
      </div>

      <div className="resultsFrameParent">
        <div className="resultsCreateAMoodWrapper">
          <b className="resultsCreateAMood">Create a mood</b>
        </div>
        <div className="resultsMyMoodsWrapper">
          <div className="resultsCreateAMood">
            <RedirectButton routePath={"/moods"} buttonText={"My moods"} />
          </div>
        </div>
      </div>

      <div className="resultsInputAndButton">
        <div className="songResults">{songs}</div>
      </div>
    </div>
  );
}

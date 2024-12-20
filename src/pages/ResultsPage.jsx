import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenSliderContext";
import MoodNameInput from "../components/MoodNameInput";
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

  // GETTING SONG URIS FOR PLAYLIST
  let songURIs = [];
  results.tracks.forEach((track) => {
    songURIs.push(track.uri);
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser({ userId: res.data.id, displayName: res.data.display_name });
    };
    getUser();
  }, []);

  const handleNewPlaylist = (e) => {
    e.preventDefault();

    const addPlaylist = async () => {
      try {
        const res = await axios.post(
          `https://api.spotify.com/v1/users/${user.userId}/playlists`,
          {
            name: moodName,
            description: "Description here",
            public: false,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.id) {
          let playlistId = res.data.id;
          const addSongs = async () => {
            const res = await axios.post(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                uris: songURIs,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
              }
            );
            if (res.data.snapshot_id) {
              alert(
                "Success! Playlist added. Open Spotify to view your new mood playlist."
              );
            }
          };
          addSongs();
        }
      } catch (error) {
        console.error(
          "Error creating playlist:",
          error.response ? error.response.data : error.message
        );
      }
    };
    addPlaylist();

    const addUserToDB = async () => {
      const res = await axios.post("/api/add_user", { user: user });
      console.log(res.status);
      console.log(res.data);
      return res.data;
    };

    const addMoodtoDB = async (userId) => {
      const res = await axios.post("/api/add_mood", {
        userId: userId,
        mood: moodInput,
      });
    };

    const run = async () => {
      const userData = await addUserToDB();
      if (userData && userData.userId) {
        await addMoodtoDB(userData.userId);
        setMoodChanged(true);
      } else {
        console.error("User ID is not available.");
      }
    };
    run();

    navigate("/moods");
  };

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

      <div className="resultsFrameWrapper">
        <b className="ResultsSaveYourMood">Save your mood playlist</b>
      </div>

      <div className="step33Parent">
        <div className="nameYourMood">Step3/3</div>
        <div className="results">RESULTS</div>
      </div>

      <div className="resultsInputAndButton">
        <div className="songResults">{songs}</div>

        <MoodNameInput onSubmit={handleNewPlaylist} />
      </div>
    </div>
  );
}

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenSliderContext";
import MoodNameInput from "../components/MoodNameInput";
import { useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const navigate = useNavigate();

  const { token, genre, energyValue, instValue, hapValue, moodName } =
    useToken();

  const [user, setUser] = useState({ userId: "", displayName: "" });

  const [results, setResults] = useState({
    tracks: [{ id: 1, name: "Loading", artists: [{ name: "Please wait" }] }],
  });

  // THIS WILL BE USER INPUT
  const moodInput = {
    genre: genre,
    energy: energyValue / 10,
    instrumentalness: instValue / 10,
    happiness: hapValue / 10,
    name: moodName,
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
      console.log(moodInput);
      setResults(res.data);
    };
    fetchRecs(moodInput);
  }, []);

  // GETTING SONG URIS FOR PLAYLIST
  let songURIs = [];
  results.tracks.forEach((track) => {
    songURIs.push(track.uri);
  });

  useEffect(() => {
    const getUserId = async () => {
      const res = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser({ userId: res.data.id, displayName: res.data.display_name });
    };
    getUserId();
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
              alert("Success! Playlist added to Spotify.");
            }
          };
          addSongs();
          // const updatePlaylistName = async () => {
          //   const res = await axios.put(
          //     `https://api.spotify.com/v1/playlists/${playlistId}`,
          //     {
          //       name: moodName,
          //     },
          //     {
          //       headers: {
          //         Authorization: `Bearer ${token}`,
          //         "Content-Type": "application/json",
          //       },
          //     }
          //   );
          // };
          // updatePlaylistName();
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
      const res = await axios.post("/add_user", { user: user });
      console.log(res.status);
      if (res.status === 200) {
        const addMoodtoDB = async () => {
          const res = await axios.post("/add_mood", {
            userId: user.userId,
            mood: moodInput,
          });
          console.log(res.status);
        };
        addMoodtoDB();
      }
    };
    addUserToDB();
  };

  const songs = results.tracks.map(({ id, name, artists }) => {
    return (
      <li className="song" key={id}>
        {name}
        <br />
        {artists[0].name}
        <br />
        <br />
      </li>
    );
  });

  // works for now, but would love to avoid these errors
  if (!token) {
    useEffect(() => {
      navigate("/");
    }, []);
  }

  return (
    <>
      <ul>{songs}</ul>
      <MoodNameInput onSubmit={handleNewPlaylist} />
    </>
  );
}

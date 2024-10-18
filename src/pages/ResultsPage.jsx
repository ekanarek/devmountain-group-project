import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenContext";
import SavePlaylistButton from "../components/SavePlaylistButton";

export default function ResultsPage() {
  const { token, setToken } = useToken();
  const [userId, setUserId] = useState("");
  const [results, setResults] = useState({
    tracks: [{ id: 1, name: "Loading", artists: [{ name: "Please wait" }] }],
  });

  // THIS WILL BE USER INPUT
  const moodInput = {
    genre: "house",
    energy: 0.7721,
    instrumentalness: 0.7721,
    happiness: 0.7721,
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
      console.log(res.data);
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
      setUserId(res.data.id);
    };
    getUserId();
  }, []);

  const handleNewPlaylist = () => {
    const addPlaylist = async () => {
      try {
        const res = await axios.post(
          `https://api.spotify.com/v1/users/${userId}/playlists`,
          {
            name: "New MoodMaestro Mood",
            description: "description here",
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
              alert("Success! Playlist added.");
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
      <SavePlaylistButton onClick={handleNewPlaylist} />
    </>
  );
}

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
            description: "description",
            public: false,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        return res.data.id;
      } catch (error) {
        console.error(
          "Error creating playlist:",
          error.response ? error.response.data : error.message
        );
      }
    };

    const addSongs = async (playlistId) => {
      const res = await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          data: {
            uris: songURIs,
          },
        }
      );
      if (res.data.snapshot_id) {
        alert("Success! Playlist added.");
      }
    };

    let playlistId = addPlaylist();
    addSongs(playlistId);
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

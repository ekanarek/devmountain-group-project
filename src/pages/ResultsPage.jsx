import axios from "axios";
import { useState, useEffect } from "react";
import { useToken } from "../contexts/TokenContext";
import SavePlaylistButton from "../components/SavePlaylistButton";

export default function ResultsPage() {
  const { token, setToken, userId, setUserId } = useToken();
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
      console.log(res.data);
    };
    fetchRecs(moodInput);
  }, []);

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

  let playlistId;

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

        console.log(res.data);
        playlistId = res.data.id;
      } catch (error) {
        console.error(
          "Error creating playlist:",
          error.response ? error.response.data : error.message
        );
      }
    };

    //GET URIS FROM RESULTS AND TURN THEM INTO AN ARRAY FOR THE FOLLOWING FUNCTION

    const addSongs = async (songURIs) => {
      const res = await axios.post(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          data: {
            uris: [""],
            position: 0,
          },
        }
      );
      if (res.data.snapshot_id) {
        res.json({ success: true });
      }
    };
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

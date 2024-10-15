import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FetchRecsButton from "../components/FetchRecsButton";
import ResultsPage from "./ResultsPage";
import { useToken } from "../contexts/TokenContext";

export default function LandingPage() {
  //sample response
  const sampleUserObject = {
    country: "string",
    display_name: "Loading",
    email: "Loading",
    explicit_content: {
      filter_enabled: false,
      filter_locked: false,
    },
    external_urls: {
      spotify: "string",
    },
    followers: {
      href: "string",
      total: 0,
    },
    href: "string",
    id: "string",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
        height: 300,
        width: 300,
      },
    ],
    product: "string",
    type: "string",
    uri: "string",
  };

  const navigate = useNavigate();
  const { token, setToken } = useToken();
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
    setToken(accessToken);
    getProfile(accessToken);
  }, []);

  // const moodInput = {
  //   genre: "classical",
  //   energy: 0,
  //   instrumentalness: 0,
  //   happiness: 0,
  // };

  const handleFetch = () => {
    navigate("/results");
  };

  return (
    <>
      <h3>You made it, {serverData.display_name}!</h3>
      <h4>Email: {serverData.email}</h4>
      <FetchRecsButton onClick={handleFetch} />
    </>
  );
}

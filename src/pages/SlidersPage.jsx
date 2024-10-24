import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FetchRecsButton from "../components/FetchRecsButton";
import { useToken } from "../contexts/TokenSliderContext";
import MoodSlider from "../components/MoodSlider";

export default function SlidersPage() {
  //sample response
  const sampleUserObject = {
    display_name: "Loading",
    email: "Loading",
  };

  const navigate = useNavigate();
  const { token, setToken, energyValue, instValue, hapValue } = useToken();

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

  const handleFetch = () => {
    navigate("/results");
  };

  return (
    <>
      <div className="energySliderContainer">
        <p>How much energy do you have?</p>
        <MoodSlider attribute={"energy"} />
        {energyValue}
      </div>
      <br />

      <div className="instSliderContainer">
        <p>How instrumental would you like your music to be?</p>
        <MoodSlider attribute={"inst"} />
        {instValue}
      </div>
      <br />

      <div className="hapSliderContainer">
        <p>How happy are you feeling?</p>
        <MoodSlider attribute={"hap"} />
        {hapValue}
      </div>
      <br />
      <br />

      <FetchRecsButton onClick={handleFetch} />
    </>
  );
}

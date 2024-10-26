import React from "react";
import { useState, useEffect } from "react";
import GenreButton from "../components/GenreButton";
import Header from "../components/Header";
import { useToken } from "../contexts/TokenSliderContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/GenrePageStyles.css";

export default function GenrePage() {
  const sampleUserObject = {
    display_name: "Loading",
    email: "Loading",
  };

  const navigate = useNavigate();
  const { token, setToken, genre, setGenre, userId, setUserId } = useToken();
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
      setUserId(res.data.id);
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

  // return (
  //   <div>
  //     <h2>What genre are you looking for?</h2>
  //     <div>
  //       {genres.map((genre) => (
  //         <GenreButton key={genre} genre={genre} onClick={handleGenreClick} />
  //       ))}
  //     </div>
  //     <br />
  //     <button onClick={handleNext}>Next</button>
  //   </div>
  // );

  return (
    <div className="desktopstep1Genre">
      <div className="step1Synclogo1Parent">
        <Header height="42rem" />
        <img className="step1VectorIcon" alt="" src="/src/assets/profile.svg" />
      </div>
      {/* <div className="step1frameParent">
        <div className="step1CreateAMoodWrapper">
          <b className="step1CreateAMood">Create a mood</b>
        </div>
        <div className="step1MyMoodsWrapper">
          <div className="step1CreateAMood">My moods</div>
        </div>
      </div> */}

      <div className="frameContainerB">
        <div className="step1Text">
          We have just the playlist to fit your current mood.
        </div>
        <div className="step13Parent">
          <div className="step1NotAtAlll">Step 1/3</div>
          <div className="mood">GENRE</div>
        </div>
      </div>
      <div className="step1frameGroup">
        <div className="findYourPreferred">
          <b>{`Find your preferred genre `}</b>
        </div>

        <div className="bottomRightBlock">
          <div className="innerBottomRightBlock">
            <div className="orChooseFromTheOptionsBelWrapper">
              <div className="findYourGenre"> from the options below</div>
            </div>
            <div className="step1FrameParent3">
              <div className="step1FrameParent4">
                <GenreButton
                  color={"#e1ff28"}
                  key={genres[0]}
                  genreName={genres[0]}
                  onClick={handleGenreClick}
                />
                <GenreButton
                  color={"#ffffff"}
                  key={genres[1]}
                  genreName={genres[1]}
                  onClick={handleGenreClick}
                />
              </div>
              <div className="step1FrameParent5">
                <GenreButton
                  color={"#9780fa"}
                  key={genres[2]}
                  genreName={genres[2]}
                  onClick={handleGenreClick}
                />
                <GenreButton
                  color={"#26c485"}
                  key={genres[3]}
                  genreName={genres[3]}
                  onClick={handleGenreClick}
                />
              </div>
            </div>
            <div className="step1FrameParent3">
              <div className="step1FrameParent4">
                <GenreButton
                  color={"#29b6f6"}
                  key={genres[4]}
                  genreName={genres[4]}
                  onClick={handleGenreClick}
                />
                <GenreButton
                  color={"#ee28ff"}
                  key={genres[5]}
                  genreName={genres[5]}
                  onClick={handleGenreClick}
                />
              </div>
              <div className="step1FrameParent4">
                <GenreButton
                  color={"#f7502b"}
                  key={genres[6]}
                  genreName={genres[6]}
                  onClick={handleGenreClick}
                />
                <GenreButton
                  color={"#fa81bb"}
                  key={genres[7]}
                  genreName={genres[7]}
                  onClick={handleGenreClick}
                />
              </div>
            </div>
          </div>
          <div className="frameWrapper2">
            <h2>{genre}</h2>
            <div className="frameWrapper3">
              <button className="step1NextWrapper" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

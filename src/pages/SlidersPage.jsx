import React from "react";
import { useNavigate } from "react-router-dom";
import FetchRecsButton from "../components/FetchRecsButton";
import { useToken } from "../contexts/TokenSliderContext";
import MoodSlider from "../components/MoodSlider";
import RedirectButton from "../components/RedirectButton";
import "../styles/SlidersPageStyles.css";
import Header from "../components/Header";

export default function SlidersPage() {
  const navigate = useNavigate();
  const { energyValue, instValue, hapValue } = useToken();

  const handleFetch = () => {
    navigate("/results");
  };

  return (
    <div className="desktopStep2sliders">
      <div className="synclogo1Parent">
        <Header height="42rem" />
      </div>

      <div className="frameParent">
        <div className="createAMoodWrapper">
          <b className="createAMood">Create a mood</b>
        </div>
        <div className="myMoodsWrapper">
          <RedirectButton routePath={"/moods"} buttonText={"My moods"} />
        </div>
      </div>

      <div className="frameContainer">
        <div className="weHaveJust">
          We have just the playlist to fit your current mood.
        </div>
        <div className="step23Parent">
          <div className="notAtAlll">Step 2/3</div>
          <div className="mood">MOOD</div>
        </div>
      </div>

      <div className="frameGroup">
        <div className="frameDiv">
          <div className="frameParent1">
            <div className="frameContainer">
              <div className="selectYourEnergyLevelWrapper">
                <div className="selectYourEnergy">Select your energy level</div>
              </div>
              <div className="frameParent3">
                <>
                  <div className="frameChild">
                    <MoodSlider attribute={"energy"} />
                    {energyValue}
                  </div>
                </>
                <div className="notAtAlllParent">
                  <div className="notAtAlll">none at all</div>
                  <div className="notAtAlll">I want to dance!</div>
                </div>
              </div>
            </div>
            <div className="frameParent4">
              <div className="frameContainer">
                <div className="selectYourEnergyLevelWrapper">
                  <div className="selectYourEnergy">
                    Select your instrumentalness
                  </div>
                </div>
                <div className="frameParent3">
                  <div className="groupWrapper">
                    <>
                      <div className="frameChild">
                        <MoodSlider attribute={"inst"} />
                        {instValue}
                      </div>
                    </>
                  </div>
                  <div className="notAtAlllParent">
                    <div className="notAtAlll">
                      <p className="just">just</p>
                      <p className="just">instruments</p>
                    </div>
                    <div className="notAtAlll">
                      <p className="just">I want to</p>
                      <p className="just">sing along</p>
                    </div>
                  </div>
                </div>
                <div className="selectYourEnergyLevelWrapper">
                  <div className="selectYourEnergy">
                    Select your happiness level
                  </div>
                </div>
                <div className="frameParent3">
                  <div className="groupWrapper">
                    <>
                      <div className="frameChild">
                        <MoodSlider attribute={"hap"} />
                        {hapValue}
                      </div>
                    </>
                  </div>
                  <div className="notAtAlllParent">
                    <div className="notAtAlll">
                      <p className="just">very</p>
                      <p className="just">sad</p>
                    </div>
                    <div className="notAtAlll">
                      <p className="just">omg</p>
                      <p className="just">so happy</p>
                    </div>
                  </div>
                </div>

                <div className="frameWrapper1">
                  <div className="frameParent10">
                    <FetchRecsButton onClick={handleFetch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

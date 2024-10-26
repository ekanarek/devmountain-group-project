import React from "react";
import "../css/savedMoods.css";

const DesktopSavedMoods = () => {
  return (
    <div className="desktopSavedmoods">
      <div className="savedSynclogo1Parent">
        <img
          className="savedSynclogo1Icon"
          alt=""
          src="/src/assets/syncLogo.svg"
        />
        <img
          className="savedStep1VectorIcon"
          alt=""
          src="/src/assets/profile.svg"
        />
      </div>
      <div className="savedFrameParent">
        <div className="savedCreateAMoodWrapper">
        <div className="resultsCreateAMood">Create a mood</div>        </div>
        <div className="savedMyMoodsWrapper">
          <b>My moods</b>
        </div>
      </div>
        <div className="savedMoodPadding">
          <div className="savedMood">
             
                        <b className="moodDetails">Mood Title</b>
                        <div className="moodDetails">Date</div>
                      
               
          </div>
        </div>

    </div>
  );
};

export default DesktopSavedMoods;

import React from "react";
import "../css/results.css"; // Make sure to create this CSS file

const DesktopResults = () => {
  return (
    <div className="desktopResults">
      <div className="resultsSynclogo1Parent">
        <img
          className="resultsSynclogo1Icon"
          alt=""
          src="/src/assets/syncLogo.svg"
        />
        <img
          className="resultsStep1VectorIcon"
          alt=""
          src="/src/assets/profile.svg"
        />
      </div>
      <div className="resultsFrameParent">
        <div className="resultsCreateAMoodWrapper">
          <b className="resultsCreateAMood">Create a mood</b>
        </div>
        <div className="resultsMyMoodsWrapper">
          <div className="resultsCreateAMood">My moods</div>
        </div>
      </div>
    
         
            <div className="resultsFrameWrapper">
             
                <b className="ResultsSaveYourMood">Save your mood playlist</b>
       
            </div>

          <div className="step33Parent">
            <div className="nameYourMood">Step3/3</div>
            <div className="results">RESULTS</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>

          <div className="song">
            <b>Band</b>
            <div>Song</div>
          </div>
        
            <div className="resultsInputAndButton">
            
                <input
                  type="text"
                  className="nameYourMoodInput"
                  placeholder="Name your mood"
                />
                <div className="saveMyMoodWrapper">
                  <b className="nameYourMood">save my mood</b>
                </div>
             
            </div>

    </div>
  );
};

export default DesktopResults;

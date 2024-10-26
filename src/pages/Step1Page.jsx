import React from "react";
import "../css/step1.css";
// // import '../css/step2.css';

const DesktopStep1Genre = () => {
  return (
    <div className="desktopstep1Genre">
      <div className="step1Synclogo1Parent">
        <img className="step1Synclogo1Icon" alt="" src="/src/assets/syncLogo.svg" />
        <img className="step1VectorIcon" alt="" src="/src/assets/profile.svg" />
      </div>
      <div className="step1frameParent">
        <div className="step1CreateAMoodWrapper">
          <b className="step1CreateAMood">Create a mood</b>
        </div>
        <div className="step1MyMoodsWrapper">
          <div className="step1CreateAMood">My moods</div>
        </div>
      </div>

      <div className="frameContainerB">
        <div className="step1HeaderText">
          <b className="step1Text">
            We have just the playlist to fit your current mood.
          </b>
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
                <div className="popWrapper">
                  <b className="pop">pop</b>
                </div>
                <div className="indieWrapper">
                  <b className="pop">indie</b>
                </div>
              </div>
              <div className="step1FrameParent5">
                <div className="hipHopWrapper">
                  <b className="pop">hip hop</b>
                </div>
                <div className="alternativeWrapper">
                  <b className="pop">Alternative</b>
                </div>
              </div>
            </div>
            <div className="step1FrameParent3">
              <div className="step1FrameParent4">
                <div className="rockWrapper">
                  <b className="pop">rock</b>
                </div>
                <div className="rnbWrapper">
                  <b className="pop">rnb</b>
                </div>
              </div>
              <div className="step1FrameParent4">
                <div className="jazzWrapper">
                  <b className="pop">jazz</b>
                </div>
                <div className="classicalWrapper">
                  <b className="pop">classical</b>
                </div>
              </div>
            </div>
          </div>
          <div className="frameWrapper2">
            <div className="frameWrapper3">
              <div className="step1NextWrapper">
                <b className="findYourGenre">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopStep1Genre;

import React from "react";
import { useNavigate } from "react-router-dom";
import FetchRecsButton from "../components/FetchRecsButton";
import { useToken } from "../contexts/TokenSliderContext";
import MoodSlider from "../components/MoodSlider";

export default function SlidersPage() {
  const navigate = useNavigate();
  const { energyValue, instValue, hapValue } = useToken();

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

//   return (
//     <div className="desktopStep2sliders">
//       <div className="synclogo1Parent">
//         <img className="synclogo1Icon" alt="" src="/src/assets/syncLogo.svg" />
//         <img className="vectorIcon" alt="" src="/src/assets/profile.svg" />
//       </div>
//       <div className="frameParent">
//         <div className="createAMoodWrapper">
//           <b className="createAMood">Create a mood</b>
//         </div>
//         <div className="myMoodsWrapper">
//           <div className="createAMood">My moods</div>
//         </div>
//       </div>

//       <div className="frameContainer">
//         <div className="weHaveJustThePlaylistToFWrapper">
//           <b className="weHaveJust">
//             We have just the playlist to fit your current mood.
//           </b>
//         </div>
//         <div className="step23Parent">
//           <div className="notAtAlll">Step 2/3</div>
//           <div className="mood">MOOD</div>
//         </div>
//       </div>

//       <div className="frameGroup">
//         <div className="frameDiv">
//           <div className="frameParent1">
//             <div className="frameContainer">
//               <div className="selectYourEnergyLevelWrapper">
//                 <div className="selectYourEnergy">Select your energy level</div>
//               </div>
//               <div className="frameParent3">
//                 <>
//                   <div className="frameChild">
//                     <MoodSlider attribute={"energy"} />
//                     {energyValue}
//                   </div>
//                 </>
//                 <div className="notAtAlllParent">
//                   <div className="notAtAlll">not at all</div>
//                   <div className="notAtAlll">I want to dance!</div>
//                 </div>
//               </div>
//             </div>
//             <div className="frameParent4">
//               <div className="frameContainer">
//                 <div className="selectYourEnergyLevelWrapper">
//                   <div className="selectYourEnergy">
//                     Select your music balance
//                   </div>
//                 </div>
//                 <div className="frameParent3">
//                   <div className="groupWrapper">
//                     {/* <img  alt="" src="/src/assets/Group2.svg" />   */}
//                     <>
//                       <div className="frameChild">
//                         <MoodSlider attribute={"inst"} />
//                         {instValue}
//                       </div>
//                     </>
//                   </div>
//                   <div className="notAtAlllParent">
//                     <div className="notAtAlll">
//                       <p className="just">just</p>
//                       <p className="just">instruments</p>
//                     </div>
//                     <div className="notAtAlll">
//                       <p className="just">I want to</p>
//                       <p className="just">sing along</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="selectYourEnergyLevelWrapper">
//                   <div className="selectYourEnergy">
//                     Select your happiness level
//                   </div>
//                 </div>
//                 <div className="frameParent3">
//                   <div className="groupWrapper">
//                     {/* <img  alt="" src="/src/assets/Group2.svg" />   */}
//                     <>
//                       <div className="frameChild">
//                         <MoodSlider attribute={"hap"} />
//                         {hapValue}
//                       </div>
//                     </>
//                   </div>
//                   <div className="notAtAlllParent">
//                     <div className="notAtAlll">
//                       <p className="just">just</p>
//                       <p className="just">instruments</p>
//                     </div>
//                     <div className="notAtAlll">
//                       <p className="just">I want to</p>
//                       <p className="just">sing along</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="frameWrapper1">
//                   <div className="frameParent10">
//                     <div className="backWrapper">
//                       <b className="notAtAlll">back</b>
//                     </div>
//                     <div className="nextWrapper">
//                       {/* <b className="notAtAlllNext">next</b> */}
//                       <FetchRecsButton onClick={handleFetch} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

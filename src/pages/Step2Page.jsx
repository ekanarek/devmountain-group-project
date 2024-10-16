// File: src/pages/Step2Page.jsx  
import React from 'react';  
import '../css/step2.css'; // Corrected path to the CSS file  
import MoodSlider from "../components/moodSlider.jsx";


const DesktopStep2sliders = () => {  
    return (  
        <div className="desktopStep2sliders">  
            <div className="synclogo1Parent">  
                <img className="synclogo1Icon" alt="" src="/src/assets/syncLogo.svg" />  
                <img className="vectorIcon" alt="" src="/src/assets/profile.svg" />  
            </div>  
            <div className="frameParent">  
                <div className="createAMoodWrapper">  
                    <b className="createAMood">Create a mood</b>  
                </div>  
                <div className="myMoodsWrapper">  
                    <div className="createAMood">My moods</div>  
                </div>  
            </div>  
            <div className="frameGroup">  
                <div className="frameContainer">  
                    <div className="weHaveJustThePlaylistToFWrapper">  
                        <b className="weHaveJust">We have just the playlist to fit your current mood.</b>  
                    </div>  
                    <div className="step23Parent">  
                        <div className="notAtAlll">Step 2/3</div>  
                        <div className="mood">MOOD</div>  
                    </div>  
                </div>  
                <div className="frameDiv">  
                    <div className="frameParent1">  
                        <div className="frameContainer">  
                            <div className="selectYourEnergyLevelWrapper">  
                                <div className="selectYourEnergy">Select your energy level</div>  
                            </div>  
                            <div className="frameParent3">  
                            <>
                       <div className="frameChild">
                       <MoodSlider />
                        </div>             
    
    </> 
                                <div className="notAtAlllParent">  
                                    <div className="notAtAlll">not at all</div>  
                                    <div className="notAtAlll">I want to dance!</div>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="frameParent4">  
                            <div className="selectYourEnergyLevelWrapper">  
                                <div className="selectYourEnergy">Select your music balance</div>  
                            </div>  
                            <div className="frameParent3">  
                                <div className="groupWrapper">  
                                    {/* <img  alt="" src="/src/assets/Group2.svg" />   */}
                                    <>
                       <div className="frameChild">
                       <MoodSlider />
                        </div>             
    
    </>
                                </div>  
                                <div className="notAtAlllParent">  
                                    <div className="notAtAlll">  
                                        <p className="just">just</p>  
                                        <p className="just">instruments</p>  
                                    </div>  
                                    <div className="notAtAlll">  
                                        <p className="just">i want to</p>  
                                        <p className="just">sing along</p>  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                    <div className="frameParent6">  
                        <div className="weHaveJustThePlaylistToFWrapper">  
                            <div className="frameContainer">  
                                <div className="selectYourEnergyLevelWrapper">  
                                    <div className="selectYourEnergy">Select your happiness level</div>  
                                </div>  
                                <div className="frameParent3">  
                                    <div className="frameParent9">  
                                        <div className="emojiLoudlyCryingFaceWrapper">  
                                            <img className="emojiLoudlyCryingFace" alt="" src={`/src/assets/emojiCrying.svg`} />  
                                        </div>  
                                        <div className="emojiWorriedFaceWrapper">  
                                            <img className="emojiWorriedFace" alt="" src={`/src/assets/emojiWorried.svg`} />  
                                        </div>  
                                        <div className="emojiWorriedFaceWrapper">  
                                            <img className="emojiWorriedFace" alt="" src={`/src/assets/emojiNeutral.svg`} />  
                                        </div>  
                                        <div className="emojiWorriedFaceWrapper">  
                                            <img className="emojiWorriedFace" alt="" src={`/src/assets/emojiSmiling.svg`} />  
                                        </div>  
                                        <div className="emojiWorriedFaceWrapper">  
                                            <img className="emojiGrinningFace" alt="" src={`/src/assets/emojiGrinning.svg`} />  
                                        </div>  
                                    </div>  
                                    <div className="notAtAlllParent">  
                                        <div className="low">low</div>  
                                        <div className="low">high</div>  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                        <div className="frameWrapper1">  
                            <div className="frameParent10">  
                                <div className="backWrapper">  
                                    <b className="notAtAlll">back</b>  
                                </div>  
                                <div className="nextWrapper">  
                                    <b className="notAtAlll">next</b>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default DesktopStep2sliders;




 


// import React from 'react';  
// import '../css/step2.css'; // Ensure this is a global CSS import  
// import MoodSlider from '../components/moodSlider.jsx';  

// // Main Component  
// const DesktopStep2sliders = () => {  
//     return (  
//         <div className="step2">  
//             <div className="syncLogoContainer">  
//                 <img className="syncLogoIcon" alt="" src="/src/assets/syncLogo.svg" />  
//                 <img className="profileIcon" alt="" src="/src/assets/profile.svg" />  
//             </div>  
//             <div className="headerContainer">  
//                 <div className="createMoodTitleContainer">  
//                     <b className="createMoodTitle">Create a Mood</b>  
//                 </div>  
//                 <div className="myMoodsContainer">  
//                     <div className="myMoodsTitle">My Moods</div>  
//                 </div>  
//             </div>  
//             <div className="contentContainer">  
//                 <div className="playlistMessageContainer">  
//                     <b className="playlistMessage">We have just the playlist to fit your current mood.</b>  
//                 </div>  
//                 <div className="stepIndicator">  
//                     <div className="stepNumber">Step 2/3</div>  
//                     <div className="moodLabel">MOOD</div>  
//                 </div>  

//                 {/* Energy Level Section */}  
//                 <div className="energyLevelContainer">  
//                     <div className="energyLevelHeaderContainer">  
//                         <div className="energyLevelTitle">Select Your Energy Level</div>  
//                     </div>  
//                     <div className="energyLevelContent">  
//                         <div className="sliderContainer">  
//                             <img className="sliderIcon" alt="" src="/src/assets/Group2.svg" />  
//                         </div>  
//                         <div className="energyLevelLabels">  
//                             <div className="energyLevelLow">not at all</div>  
//                             <div className="energyLevelHigh">I want to dance!</div>  
//                         </div>  
//                     </div>  
//                 </div>  

//                 {/* Music Balance Section */}  
//                 <div className="musicBalanceContainer">  
//                     <div className="musicBalanceHeaderContainer">  
//                         <div className="musicBalanceTitle">Select Your Music Balance</div>  
//                     </div>  
//                     <div className="musicBalanceContent">  
//                         <div className="sliderContainer">  
//                             <MoodSlider />  
//                         </div>  
//                         <div className="musicBalanceLabels">  
//                             <div className="balanceLow">  
//                                 <p className="balanceText">just</p>  
//                                 <p className="balanceText">instruments</p>  
//                             </div>  
//                             <div className="balanceHigh">  
//                                 <p className="balanceText">I want to</p>  
//                                 <p className="balanceText">sing along</p>  
//                             </div>  
//                         </div>  
//                     </div>  
//                 </div>  

//                 {/* Happiness Level Section */}  
//                 <div className="happinessLevelContainer">  
//                     <div className="happinessLevelHeaderContainer">  
//                         <div className="happinessLevelTitle">Select Your Happiness Level</div>  
//                     </div>  
//                     <div className="happinessLevelContent emojiContainer">  
//                         {/* Emoji Buttons */}  
//                         <div className="emojiWrapper">  
//                             <button className="emojiButton">  
//                                 <img className="emoji emojiCrying" alt="" src={`/src/assets/emojiCrying.svg`} />  
//                             </button>  
//                             <button className="emojiButton">  
//                                 <img className="emoji emojiWorried" alt="" src={`/src/assets/emojiWorried.svg`} />  
//                             </button>  
//                             <button className="emojiButton">  
//                                 <img className="emoji emojiNeutral" alt="" src={`/src/assets/emojiNeutral.svg`} />  
//                             </button>  
//                             <button className="emojiButton">  
//                                 <img className="emoji emojiSmiling" alt="" src={`/src/assets/emojiSmiling.svg`} />  
//                             </button>  
//                             <button className="emojiButton">  
//                                 <img className="emoji emojiGrinning" alt="" src={`/src/assets/emojiGrinning.svg`} />  
//                             </button>  
//                         </div>  
//                         <div className="happinessLevelLabels">  
//                             <div className="lowLabel">low</div>  
//                             <div className="highLabel">high</div>  
//                         </div>  
//                     </div>  
//                 </div>  

//                 {/* Navigation Buttons */}  
//                 <div className="navigationContainer">  
//                     <div className="navigationButtons">  
//                         <div className="backButton">  
//                             <b className="navigationText">back</b>  
//                         </div>  
//                         <div className="nextButton">  
//                             <b className="navigationText">next</b>  
//                         </div>  
//                     </div>  
//                 </div>  
//             </div>  
//         </div>  
//     );  
// };  

// export default DesktopStep2sliders;
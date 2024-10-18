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
            
            <div className="frameContainer">  
                    <div className="weHaveJustThePlaylistToFWrapper">  
                        <b className="weHaveJust">We have just the playlist to fit your current mood.</b>  
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
                        <div className="frameContainer"> 
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
                                        <p className="just">I want to</p>  
                                        <p className="just">sing along</p>  
                                    </div>  
                                </div> 
                                </div>  
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
            </div>  
        </div>  
    );  
};  

export default DesktopStep2sliders;




 



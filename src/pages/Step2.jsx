
import axios from 'axios';  
import { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';  
import React from 'react';  
import '/src/css/step2.css'; 
import '/src/index.css'; 
import styles from '/src/css/step2.css';  

const DesktopStep2sliders = () => {  
    return (  
        <div className={styles.desktopStep2sliders}>  
            <div className={styles.synclogo1Parent}>  
                <img className={styles.synclogo1Icon} alt="" src="syncLogo.svg" />  
                <img className={styles.vectorIcon} alt="" src="profile.svg" />  
            </div>  
            <div className={styles.frameParent}>  
                <div className={styles.createAMoodWrapper}>  
                    <b className={styles.createAMood}>Create a mood</b>  
                </div>  
                <div className={styles.myMoodsWrapper}>  
                    <div className={styles.createAMood}>My moods</div>  
                </div>  
            </div>  
            <div className={styles.frameGroup}>  
                <div className={styles.frameContainer}>  
                    <div className={styles.weHaveJustThePlaylistToFWrapper}>  
                        <b className={styles.weHaveJust}>We have just the playlist to fit your current mood.</b>  
                    </div>  
                    <div className={styles.step23Parent}>  
                        <div className={styles.notAtAlll}>Step 2/3</div>  
                        <div className={styles.mood}>MOOD</div>  
                    </div>  
                </div>  
                <div className={styles.frameDiv}>  
                    <div className={styles.frameParent1}>  
                        <div className={styles.frameContainer}>  
                            <div className={styles.selectYourEnergyLevelWrapper}>  
                                <div className={styles.selectYourEnergy}>Select your energy level</div>  
                            </div>  
                            <div className={styles.frameParent3}>  
                                <div className={styles.groupWrapper}>  
                                    <img className={styles.frameChild} alt="" src="Group2.svg" />  
                                </div>  
                                <div className={styles.notAtAlllParent}>  
                                    <div className={styles.notAtAlll}>not at all</div>  
                                    <div className={styles.notAtAlll}>I want to dance!</div>  
                                </div>  
                            </div>  
                        </div>  
                        <div className={styles.frameParent4}>  
                            <div className={styles.selectYourEnergyLevelWrapper}>  
                                <div className={styles.selectYourEnergy}>Select your music balance</div>  
                            </div>  
                            <div className={styles.frameParent3}>  
                                <div className={styles.groupWrapper}>  
                                    <img className={styles.frameChild} alt="" src="Group2.svg" />  
                                </div>  
                                <div className={styles.notAtAlllParent}>  
                                    <div className={styles.notAtAlll}>  
                                        <p className={styles.just}>just</p>  
                                        <p className={styles.just}>instruments</p>  
                                    </div>  
                                    <div className={styles.notAtAlll}>  
                                        <p className={styles.just}>i want to</p>  
                                        <p className={styles.just}>sing along</p>  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                    <div className={styles.frameParent6}>  
                        <div className={styles.weHaveJustThePlaylistToFWrapper}>  
                            <div className={styles.frameContainer}>  
                                <div className={styles.selectYourEnergyLevelWrapper}>  
                                    <div className={styles.selectYourEnergy}>Select your happiness level</div>  
                                </div>  
                                <div className={styles.frameParent3}>  
                                    <div className={styles.frameParent9}>  
                                        <div className={styles.emojiLoudlyCryingFaceWrapper}>  
                                            <img className={styles.emojiLoudlyCryingFace} alt="" src={`src/assets/emojiCrying'.svg`} />  
                                        </div>  
                                        <div className={styles.emojiWorriedFaceWrapper}>  
                                            <img className={styles.emojiWorriedFace} alt="" src={`src/assets/emojiWorried'.svg`} />  
                                        </div>  
                                        <div className={styles.emojiWorriedFaceWrapper}>  
                                            <img className={styles.emojiWorriedFace} alt="" src={`src/assets/emojiNeutral'.svg`} />  
                                        </div>  
                                        <div className={styles.emojiWorriedFaceWrapper}>  
                                            <img className={styles.emojiWorriedFace} alt="" src={`src/assets/emojiSmiling'.svg`} />  
                                        </div>  
                                        <div className={styles.emojiWorriedFaceWrapper}>  
                                            <img className={styles.emojiGrinningFace} alt="" src={`src/assets/emojiGrinning'.svg`} />  
                                        </div>  
                                    </div>  
                                    <div className={styles.notAtAlllParent}>  
                                        <div className={styles.low}>low</div>  
                                        <div className={styles.low}>high</div>  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                        <div className={styles.frameWrapper1}>  
                            <div className={styles.frameParent10}>  
                                <div className={styles.backWrapper}>  
                                    <b className={styles.notAtAlll}>back</b>  
                                </div>  
                                <div className={styles.nextWrapper}>  
                                    <b className={styles.notAtAlll}>next</b>  
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
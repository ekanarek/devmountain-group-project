import TestButton from "../components/TestButton";
import React from "react";
import "../css/homepage.css"; 



const DesktopLogin = () => {  
  return (  
      <div className="desktopLogin">  
          {/* <div className="desktopLoginChild" />   */}
          <div className="homePageFrameParent">  
              <div className="homePagelogoAndText">  
                  <div className="introLogoWrapper">  
                      <div className="introLogo">  
                           <img alt="" src="/src/assets/syncLogo.svg" />
                      </div>  
                  </div>  

                 
                  <div className="brandStatement">Give us your mood and we’ll give you some toons ;P</div>  
              </div>  
              <div className="logoBtnWrap">  
                  <div className="logoBtn">  
                      <div className="logoWithText">  
                          <img className="spotifyPrimaryLogoRgbGreenIcon" alt="" src="/src/assets/spotify.png" />  
                          <b className="signInWith">sign in with spotify</b>  
                      </div>  
                  </div>  
              </div>  
          </div>  
      </div>  
  );  
};  

export default DesktopLogin;
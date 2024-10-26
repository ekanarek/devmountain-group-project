import React from "react";
import LoginButton from "../components/LoginButton.jsx";
import Header from "../components/Header.jsx";
import "../styles/HomePageStyles.css";

export default function HomePage() {
  const handleLogin = () => {
    window.location = "/login";
  };

  // return (
  //   <>
  //     <LoginButton onClick={handleLogin} />
  //   </>
  // );

  return (
    <div className="desktopLogin">
      <div className="homePageFrameParent">
        <div className="homePagelogoAndText">
          <div className="introLogoWrapper">
            <Header />
          </div>

          <div className="brandStatement">
            Give us your mood and we’ll give you some toons ;P
          </div>
        </div>
        <div className="logoWithText">
          <LoginButton onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}

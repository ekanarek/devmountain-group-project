import React from "react";
import LoginButton from "../components/LoginButton.jsx";
import Header from "../components/Header.jsx";
import "../styles/HomePageStyles.css";

export default function HomePage() {
  const handleLogin = () => {
    window.location = "/login";
  };

  return (
    <div className="desktopLogin">
      <div className="homePageFrameParent">
        <div className="homePagelogoAndText">
          <div className="introLogoWrapper">
            <Header />
          </div>

          <div className="brandStatement">
            Give us your mood and we’ll give you some toons ;P
            {/* Build custom playlists based on how you're feeling.
            <br />
            Just log in to your Spotify account, select from popular genres, set
            your mood, and we’ll generate a playlist tailored just for you! */}
          </div>
        </div>
        <div className="logoWithText">
          <LoginButton onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}

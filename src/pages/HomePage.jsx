import React from "react";
import LoginButton from "../components/LoginButton.jsx";

export default function HomePage() {
  const handleLogin = () => {
    window.location = "/login";
  };

  return (
    <>
      <LoginButton onClick={handleLogin} />
    </>
  );
}

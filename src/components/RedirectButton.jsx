import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectButton({
  routePath,
  buttonText,
  selectedMood,
  setSelectedMood,
}) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (selectedMood) {
      setSelectedMood(null);
    }
    navigate(routePath);
  };

  if (selectedMood) {
    return (
      <button className="backToMoodsButton" onClick={handleRedirect}>
        {buttonText}
      </button>
    );
  }

  return (
    <button
      style={{
        border: "transparent",
        background: "transparent",
        cursor: "pointer",
        color: "#ffffff",
        fontSize: "16px",
      }}
      onClick={handleRedirect}
    >
      {buttonText}
    </button>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectButton({ routePath, buttonText }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(routePath);
  };

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

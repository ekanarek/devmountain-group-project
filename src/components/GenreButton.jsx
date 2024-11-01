import { useState } from "react";
import { useToken } from "../contexts/TokenSliderContext";

export default function GenreButton({ genreName, color, onClick }) {
  const { genre } = useToken();

  return (
    <button
      style={{
        backgroundColor: color,
      }}
      className="genreWrapper"
      onClick={() => {
        onClick(genreName);
      }}
    >
      {genreName}
    </button>
  );
}

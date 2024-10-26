import { useState } from "react";
import { useToken } from "../contexts/TokenSliderContext";

export default function GenreButton({ genreName, color, onClick }) {
  const { genre } = useToken();
  const [hasBorder, setHasBorder] = useState(false);

  return (
    <button
      style={{
        backgroundColor: color,
        outline: hasBorder ? "5px solid #a9a9a9" : "none",
      }}
      className="genreWrapper"
      onClick={() => {
        onClick(genreName);
        setHasBorder(!hasBorder);
      }}
    >
      {genreName}
    </button>
  );
}

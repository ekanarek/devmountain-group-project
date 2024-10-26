import { useToken } from "../contexts/TokenSliderContext";
import "../styles/MoodSliderStyles.css";

export default function MoodSlider({ attribute }) {
  const {
    energyValue,
    setEnergyValue,
    instValue,
    setInstValue,
    hapValue,
    setHapValue,
  } = useToken();

  let handleSliderChange;

  if (attribute === "energy") {
    handleSliderChange = (event) => {
      setEnergyValue(event.target.value);
    };
    return (
      <div className="mood-slider">
        <input
          type="range"
          min="0"
          max="10"
          value={energyValue}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
    );
  } else if (attribute === "inst") {
    handleSliderChange = (event) => {
      setInstValue(event.target.value);
    };
    return (
      <div className="mood-slider">
        <input
          type="range"
          min="0"
          max="10"
          value={instValue}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
    );
  } else if (attribute === "hap") {
    handleSliderChange = (event) => {
      setHapValue(event.target.value);
    };
    return (
      <div className="mood-slider">
        <input
          type="range"
          min="0"
          max="10"
          value={hapValue}
          onChange={handleSliderChange}
          className="slider"
        />
      </div>
    );
  }
}

import SavedMoodsTable from "../components/SavedMoodsTable.jsx";
import RedirectButton from "../components/RedirectButton.jsx";
import Header from "../components/Header.jsx";
import "../styles/MoodsPageStyles.css";
import { useToken } from "../contexts/TokenSliderContext.jsx";
import { useState } from "react";

export default function MoodsPage() {
  const { token } = useToken();
  const [selectedMood, setSelectedMood] = useState();

  return (
    <div className="desktopSavedmoods">
      <div className="savedSynclogo1Parent">
        <Header height="42rem" />
      </div>
      <div className="savedFrameParent">
        <div className="savedCreateAMoodWrapper">
          <RedirectButton
            routePath={`/genre?access_token=${token}`}
            buttonText={"Create a mood"}
          />
        </div>
        <div className="savedMyMoodsWrapper">
          <b className="myMoods">My moods</b>
        </div>
      </div>
      <div className="savedMoodPadding">
        <SavedMoodsTable
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
      </div>
    </div>
  );
}

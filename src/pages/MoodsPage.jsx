import SavedMoodsTable from "../components/SavedMoodsTable.jsx";
import RedirectButton from "../components/RedirectButton.jsx";
import Header from "../components/Header.jsx";
import "../styles/MoodsPageStyles.css";
import { useToken } from "../contexts/TokenSliderContext.jsx";

export default function MoodsPage() {
  const { token } = useToken();

  return (
    <div className="desktopSavedmoods">
      <div className="savedSynclogo1Parent">
        <Header height="42rem" />
        {/* <img
          className="savedStep1VectorIcon"
          alt=""
          src="/src/assets/profile.svg"
        /> */}
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
        {/* <div className="savedMood"> */}
        {/* <b className="moodDetails">Mood Title</b>
          <div className="moodDetails">Date</div> */}
        <SavedMoodsTable />
      </div>
    </div>
  );
}

import SavedMoodsTable from "../components/SavedMoodsTable.jsx";
import RedirectButton from "../components/RedirectButton.jsx";
import Header from "../components/Header.jsx";
import "../styles/MoodsPageStyles.css";

export default function MoodsPage() {
  //   return (
  //     <>
  //       <h1>Saved Moods</h1>
  //       <SavedMoodsTable />
  //       <RedirectButton routePath="/genre" buttonText="New Mood" />
  //     </>
  //   );
  // }

  return (
    <div className="desktopSavedmoods">
      <div className="savedSynclogo1Parent">
        <Header height="42rem" />
        <img
          className="savedStep1VectorIcon"
          alt=""
          src="/src/assets/profile.svg"
        />
      </div>
      <div className="savedFrameParent">
        <div className="savedCreateAMoodWrapper">
          <div className="resultsCreateAMood">Create a mood</div>
        </div>
        <div className="savedMyMoodsWrapper">
          <b>My moods</b>
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

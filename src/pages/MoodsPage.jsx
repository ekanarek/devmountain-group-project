import SavedMoodsTable from "../components/SavedMoodsTable.jsx";
import RedirectButton from "../components/RedirectButton.jsx";

export default function MoodsPage() {
  return (
    <>
      <h1>Saved Moods</h1>
      <SavedMoodsTable />
      <RedirectButton routePath="/genre" buttonText="New Mood" />
    </>
  );
}

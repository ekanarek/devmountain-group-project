import { useToken } from "../contexts/TokenSliderContext";
import SavePlaylistButton from "./SavePlaylistButton";

export default function MoodNameInput({ onSubmit }) {
  const { moodName, setMoodName } = useToken();
  return (
    <form className="inputForm" onSubmit={onSubmit}>
      <input
        className="nameYourMoodInput"
        name="name"
        id="name"
        type="text"
        placeholder="Name your mood"
        required
        onChange={(e) => setMoodName(e.target.value)}
      />
      <SavePlaylistButton />
    </form>
  );
}

import { useToken } from "../contexts/TokenSliderContext";
import SavePlaylistButton from "./SavePlaylistButton";

export default function MoodNameInput({ onSubmit }) {
  const { moodName, setMoodName } = useToken();
  return (
    <form onSubmit={onSubmit}>
      <input
        name="name"
        id="name"
        type="text"
        required
        onChange={(e) => setMoodName(e.target.value)}
      />
      <SavePlaylistButton />
    </form>
  );
}

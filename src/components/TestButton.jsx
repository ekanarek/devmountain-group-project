import axios from "axios";

export default function TestButton() {
  const login = async () => {
    const res = await axios.get("/login");
  };

  return <button onClick={login}>Login to Spotify</button>;
}

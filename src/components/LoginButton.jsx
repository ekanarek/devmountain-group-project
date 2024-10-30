import "../assets/spotify.png";

export default function LoginButton({ onClick }) {
  return (
    <button className="logoBtn" onClick={onClick}>
      <img src="/src/assets/spotify.png" alt="" />
      Login to Spotify
    </button>
  );
}

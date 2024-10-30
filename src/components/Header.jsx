import "../assets/profile.svg";
import "../assets/syncLogo.svg";

export default function Header({ height }) {
  return (
    <div className="headerContainer">
      <img
        height={height}
        className="header"
        alt=""
        src="/src/assets/maestroLogo.svg"
      />
    </div>
  );
}

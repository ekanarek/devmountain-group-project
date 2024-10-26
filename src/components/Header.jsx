import "../assets/profile.svg";
import "../assets/syncLogo.svg";

export default function Header() {
  return (
    <div className="headerContainer">
      <img className="header" alt="" src="/src/assets/syncLogo.svg" />
      {/* <img
          className="resultsStep1VectorIcon"
          alt=""
          src="/src/assets/profile.svg"
        /> */}
    </div>
  );
}

import TestButton from "../components/LoginButton";

export default function HomePage() {
  const handleLogin = () => {
    window.location = "/login";
  };

  return (
    <>
      <TestButton onClick={handleLogin} />
    </>
  );

  // another option:
  // return <a href="/login">Login to Spotify</a>;
}

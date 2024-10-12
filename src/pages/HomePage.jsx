import TestButton from "../components/TestButton";

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

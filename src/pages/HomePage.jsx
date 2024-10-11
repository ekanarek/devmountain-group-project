import TestButton from "../components/TestButton";
import axios from "axios";

export default function HomePage() {
  //THIS
  const handleClick = async () => {
    const res = await axios.get("/login");
    return;
  };

  return (
    <>
      <TestButton onClick={handleClick} />
    </>
  );
}

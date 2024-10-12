import TestButton from "../components/TestButton";
import { useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const handleLogin = async () => {
    const res = await axios.get("/login");
    console.log(res.data.access_token);
    return res.data.access_token;
  };

  return (
    <>
      <TestButton onClick={handleLogin} />
    </>
  );
}

import React from "react";
import { useContext, useState, createContext } from "react";

const TokenCoxtext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const [genre, setGenre] = useState("pop");
  const [energyValue, setEnergyValue] = useState(5);
  const [instValue, setInstValue] = useState(5);
  const [hapValue, setHapValue] = useState(5);
  const [moodName, setMoodName] = useState("");
  const [moodChanged, setMoodChanged] = useState(false);

  return (
    <TokenCoxtext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        genre,
        setGenre,
        energyValue,
        setEnergyValue,
        instValue,
        setInstValue,
        hapValue,
        setHapValue,
        moodName,
        setMoodName,
        moodChanged,
        setMoodChanged,
      }}
    >
      {children}
    </TokenCoxtext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenCoxtext);

  if (context === undefined) {
    throw new Error("useToken must be in provider");
  }
  return context;
};

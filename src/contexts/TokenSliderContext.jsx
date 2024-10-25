import React from "react";
import { useContext, useState, createContext } from "react";

const TokenCoxtext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const [genre, setGenre] = useState("pop");
  const [energyValue, setEnergyValue] = useState(5);
  const [instValue, setInstValue] = useState(5);
  const [hapValue, setHapValue] = useState(5);
  const [moodName, setMoodName] = useState("");

  return (
    <TokenCoxtext.Provider
      value={{
        token,
        setToken,
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

import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const TokenCoxtext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <TokenCoxtext.Provider
      value={{
        token,
        setToken,
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

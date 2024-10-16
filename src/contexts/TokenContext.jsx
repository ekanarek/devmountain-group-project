import { useContext, useState, useEffect, createContext } from "react";

const TokenCoxtext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <TokenCoxtext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
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

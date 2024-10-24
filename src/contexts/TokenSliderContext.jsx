import { useContext, useState, createContext } from "react";

const TokenCoxtext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const [energyValue, setEnergyValue] = useState(5);
  const [instValue, setInstValue] = useState(5);
  const [hapValue, setHapValue] = useState(5);

  return (
    <TokenCoxtext.Provider
      value={{
        token,
        setToken,
        energyValue,
        setEnergyValue,
        instValue,
        setInstValue,
        hapValue,
        setHapValue,
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

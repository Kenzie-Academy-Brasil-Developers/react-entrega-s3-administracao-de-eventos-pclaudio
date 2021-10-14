import { createContext, useEffect, useState } from "react";
import { getBeverages } from "../../services/api";

export const BeveragesContext = createContext();

export const BeveragesProvider = ({ children }) => {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    getBeverages().then((data) => setBeverages(data));
  }, []);

  return (
    <BeveragesContext.Provider value={{ beverages }}>
      {children}
    </BeveragesContext.Provider>
  );
};

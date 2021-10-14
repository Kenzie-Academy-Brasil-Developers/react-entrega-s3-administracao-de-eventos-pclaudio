import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingBeverages, setWeddingBeverages] = useState([]);

  const addBeverageToWedding = (beverage) => {
    const wasFound = weddingBeverages.find(
      (weddingBeverage) => weddingBeverage.id === beverage.id
    );

    if (!wasFound) {
      setWeddingBeverages([...weddingBeverages, beverage]);
    }
  };

  const removeBeverageFromWedding = (id) => {
    const updatedWeddingBeverages = weddingBeverages.filter(
      (beverage) => beverage.id !== id
    );

    setWeddingBeverages(updatedWeddingBeverages);
  };

  return (
    <WeddingContext.Provider
      value={{
        weddingBeverages,
        addBeverageToWedding,
        removeBeverageFromWedding,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};

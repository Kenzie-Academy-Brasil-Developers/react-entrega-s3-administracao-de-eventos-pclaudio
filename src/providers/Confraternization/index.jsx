import { createContext, useState } from "react";

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({ children }) => {
  const [confraternizationBeverages, setConfraternizationBeverages] = useState(
    []
  );

  const addBeverageToConfraternization = (beverage) => {
    const wasFound = confraternizationBeverages.find(
      (confraternizationBeverage) =>
        confraternizationBeverage.id === beverage.id
    );

    if (!wasFound) {
      setConfraternizationBeverages([...confraternizationBeverages, beverage]);
    }
  };

  const removeBeverageFromConfraternization = (id) => {
    const updatedConfraternizationBeverages = confraternizationBeverages.filter(
      (beverage) => beverage.id !== id
    );

    setConfraternizationBeverages(updatedConfraternizationBeverages);
  };

  return (
    <ConfraternizationContext.Provider
      value={{
        confraternizationBeverages,
        addBeverageToConfraternization,
        removeBeverageFromConfraternization,
      }}
    >
      {children}
    </ConfraternizationContext.Provider>
  );
};

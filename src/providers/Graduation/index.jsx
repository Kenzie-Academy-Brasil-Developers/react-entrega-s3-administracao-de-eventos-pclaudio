import { createContext, useState } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduationBeverages, setGraduationBeverages] = useState([]);

  const addBeverageToGraduation = (beverage) => {
    const wasFound = graduationBeverages.find(
      (graduationBeverage) => graduationBeverage.id === beverage.id
    );

    if (!wasFound) {
      setGraduationBeverages([...graduationBeverages, beverage]);
    }
  };

  const removeBeverageFromGraduation = (id) => {
    const updatedGraduationBeverages = graduationBeverages.filter(
      (beverage) => beverage.id !== id
    );

    setGraduationBeverages(updatedGraduationBeverages);
  };

  return (
    <GraduationContext.Provider
      value={{
        graduationBeverages,
        addBeverageToGraduation,
        removeBeverageFromGraduation,
      }}
    >
      {children}
    </GraduationContext.Provider>
  );
};

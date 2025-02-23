import React, { createContext, useState, ReactNode } from "react";

type Mittel = {
  name: string;
  width: number;
  inventory: number;
};

type AbwehrContextType = {
  Abwehrmittel: Mittel[];
  setAbwehrmittel: React.Dispatch<React.SetStateAction<Mittel[]>>;
  favouriteAbwehrmittel: string;
  setFavouriteAbwehrmittel: React.Dispatch<React.SetStateAction<string>>;
  solution: Mittel[];
  setSolution: React.Dispatch<React.SetStateAction<Mittel[]>>;
};

export const AbwehrmittelContext = createContext<AbwehrContextType | undefined>(undefined);

export const AbwehrmittelProvider = ({ children }: { children: ReactNode }) => {
  const [Abwehrmittel, setAbwehrmittel] = useState<Mittel[]>([
    { name: "OktaBlock", width: 30, inventory: 0 },
    { name: "MVB3X", width: 53, inventory: 0 },
    { name: "HStop 3", width: 120, inventory: 0 }
  ]);

  const [favouriteAbwehrmittel, setFavouriteAbwehrmittel] = useState<string>(Abwehrmittel[1].name);
  const [solution, setSolution] = useState<Mittel[]>([]);

  return (
    <AbwehrmittelContext.Provider value={{ Abwehrmittel, setAbwehrmittel, favouriteAbwehrmittel, setFavouriteAbwehrmittel, solution, setSolution }}>
      {children}
    </AbwehrmittelContext.Provider>
  );
};

export const minWidth = 120;
export const maxWidth = 130;

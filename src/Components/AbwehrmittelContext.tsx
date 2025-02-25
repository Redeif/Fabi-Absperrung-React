import React, { createContext, useState, ReactNode } from "react";
import { MittelType, SolutionType } from "../Defaults/types";

type AbwehrContextType = {
  Abwehrmittel: MittelType[];
  setAbwehrmittel: React.Dispatch<React.SetStateAction<MittelType[]>>;
  favouriteAbwehrmittel: string;
  setFavouriteAbwehrmittel: React.Dispatch<React.SetStateAction<string>>;
  solution: SolutionType | null;
  setSolution: React.Dispatch<React.SetStateAction<SolutionType | null>>;
};

export const AbwehrmittelContext = createContext<AbwehrContextType | undefined>(undefined);

export const AbwehrmittelProvider = ({ children }: { children: ReactNode }) => {
  const [Abwehrmittel, setAbwehrmittel] = useState<MittelType[]>([
    { name: "OktaBlock", width: 27, inventory: 0 },
    { name: "MVB3X", width: 53, inventory: 0 },
    { name: "HStop 3", width: 120, inventory: 0 },
    { name: "CITYSAFE", width: 5052, inventory: 0},
    { name: "ARMIS ONE", width: 62, inventory: 0}
  ]);

  const [favouriteAbwehrmittel, setFavouriteAbwehrmittel] = useState<string>(Abwehrmittel[1].name);
  const [solution, setSolution] = useState<SolutionType | null>(null);

  return (
    <AbwehrmittelContext.Provider value={{ Abwehrmittel, setAbwehrmittel, favouriteAbwehrmittel, setFavouriteAbwehrmittel, solution, setSolution }}>
      {children}
    </AbwehrmittelContext.Provider>
  );
};

export const minWidth = 120;
export const maxWidth = 130;

import React, { createContext, useState, ReactNode } from "react";
import { MittelType } from "../Defaults/types";

type AbwehrContextType = {
  Abwehrmittel: MittelType[];
  setAbwehrmittel: React.Dispatch<React.SetStateAction<MittelType[]>>;
  favouriteAbwehrmittel: string;
  setFavouriteAbwehrmittel: React.Dispatch<React.SetStateAction<string>>;
  solution: MittelType[];
  setSolution: React.Dispatch<React.SetStateAction<MittelType[]>>;
};

export const AbwehrmittelContext = createContext<AbwehrContextType | undefined>(undefined);

export const AbwehrmittelProvider = ({ children }: { children: ReactNode }) => {
  const [Abwehrmittel, setAbwehrmittel] = useState<MittelType[]>([
    { name: "OktaBlock", width: 30, inventory: 0 },
    { name: "MVB3X", width: 53, inventory: 0 },
    { name: "HStop 3", width: 120, inventory: 0 }
  ]);

  const [favouriteAbwehrmittel, setFavouriteAbwehrmittel] = useState<string>(Abwehrmittel[1].name);
  const [solution, setSolution] = useState<MittelType[]>([]);

  return (
    <AbwehrmittelContext.Provider value={{ Abwehrmittel, setAbwehrmittel, favouriteAbwehrmittel, setFavouriteAbwehrmittel, solution, setSolution }}>
      {children}
    </AbwehrmittelContext.Provider>
  );
};

export const minWidth = 120;
export const maxWidth = 130;

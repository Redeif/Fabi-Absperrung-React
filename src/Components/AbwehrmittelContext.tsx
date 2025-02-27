import React, { createContext, useState, ReactNode } from "react";
import { MittelType, SolutionType } from "../Defaults/types";

type AbwehrContextType = {
  Abwehrmittel: MittelType[];
  setAbwehrmittel: React.Dispatch<React.SetStateAction<MittelType[]>>;
  favouriteAbwehrmittel: string;
  setFavouriteAbwehrmittel: React.Dispatch<React.SetStateAction<string>>;
  solution: SolutionType | null;
  setSolution: React.Dispatch<React.SetStateAction<SolutionType | null>>;
  averageWidth: number;
  setAverageWidth: React.Dispatch<React.SetStateAction<number>>;
  restWidth: number;
  setRestWidth: React.Dispatch<React.SetStateAction<number>>;
  calculateAvarageWidth (width: number | null): void;
  calculateRestWidth (width: number | null, widthBetween: number) : void;
};

export const AbwehrmittelContext = createContext<AbwehrContextType | undefined>(undefined);

export const AbwehrmittelProvider = ({ children }: { children: ReactNode }) => {
  const [Abwehrmittel, setAbwehrmittel] = useState<MittelType[]>([
    { name: "OktaBlock", width: 27, inventory: 0 },
    { name: "MVB3X", width: 346, inventory: 0 },
    { name: "HStop 3", width: 120, inventory: 0 },
    { name: "CITYSAFE", width: 505, inventory: 0},
    { name: "ARMIS ONE", width: 62, inventory: 0}
  ]);

  const [favouriteAbwehrmittel, setFavouriteAbwehrmittel] = useState<string>(Abwehrmittel[1].name);
  const [solution, setSolution] = useState<SolutionType | null>(null);
  const [averageWidth, setAverageWidth] = useState<number>(0)
  const [restWidth, setRestWidth] = useState<number>(0)


  const calculateAvarageWidth = (width: number |null) => {
    if (width === null || width === 0){
      setAverageWidth(0)
      return;
    }
    let totalSegmentWidth = 0;
    let abwehrmittelbreiteGesamt = 0;
    let totalInventory = 0;

    Abwehrmittel.forEach((element) => {
      totalSegmentWidth += element.inventory * (element.width + maxWidth);
      abwehrmittelbreiteGesamt += element.inventory * element.width;
      totalInventory += element.inventory
    });
    if (totalSegmentWidth === 0 || totalInventory === 0){
      setAverageWidth(width)
      return
    }

    setAverageWidth(
      parseFloat(((width - abwehrmittelbreiteGesamt) / (totalInventory+1)).toFixed(2))
    );

  };

  const calculateRestWidth = (width: number | null, widthBetween: number) => {
    if(width === null || width == 0){
      setRestWidth(0)
      return
    }
    let totalSegmentWidth = 0
    let totalInventory = 0
    Abwehrmittel.forEach((element) => {
      totalInventory += element.inventory
      totalSegmentWidth += element.inventory * (element.width + widthBetween);
    });
    if(totalInventory== 0){
      setRestWidth(width)
    }else{
      setRestWidth(width-totalSegmentWidth+widthBetween)
    }
   
  }

  return (
    <AbwehrmittelContext.Provider 
    value={{ Abwehrmittel, setAbwehrmittel, 
    favouriteAbwehrmittel, setFavouriteAbwehrmittel, 
    solution, setSolution, 
    averageWidth, setAverageWidth, 
    restWidth, setRestWidth,
     calculateAvarageWidth, calculateRestWidth }}>
      {children}
    </AbwehrmittelContext.Provider>
  );
};

export const minWidth = 120;
export const maxWidth = 130;

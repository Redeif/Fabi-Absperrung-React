import { useState, useContext } from "react";
import { AbwehrmittelContext } from "./AbwehrmittelContext";
import { maxWidth } from "./AbwehrmittelContext";
import { MittelType, SolutionType } from "../Defaults/types";

const Calculation = () => {
  const context = useContext(AbwehrmittelContext);
  if (!context) return <p>Fehler: Context nicht gefunden!</p>;

  const {
    Abwehrmittel,
    setSolution,
    favouriteAbwehrmittel
  } = context;

  const [width, setWidth] = useState<number | null>(0);

  const calculate = () => {
    if (width === null || width <= 2 * maxWidth) {
      setSolution(null);
      return;
    }

    const currentAbwehrmittel = Abwehrmittel.find(
      (mittel) => mittel.name === favouriteAbwehrmittel
    );

    if (!currentAbwehrmittel) {
      setSolution(null);
      return;
    }

    // Berechnung der Anzahl der Absperrmittel
    let calculation: MittelType[] = []
    Abwehrmittel.forEach(element => {

      calculation.push(calcNumberForAbwehrmittel(width, element))
    });
    let returnSolution: SolutionType = ({solutionWidth: width,types: calculation, bestSolution: ''});
    setSolution(returnSolution);
  };


  const calcNumberForAbwehrmittel = (completeWidth: number, currentAbwehrmittel: MittelType) =>{
    const availableWidth = completeWidth - maxWidth;
    const totalSegmentWidth = currentAbwehrmittel.width + maxWidth; // Ein Absperrmittel + ein Abstand
    const numberOfMittel = availableWidth / totalSegmentWidth;
    const averageWidth = parseFloat(((completeWidth-(Math.ceil(numberOfMittel)*currentAbwehrmittel.width))/(Math.ceil(numberOfMittel)+1)).toFixed(2));
    const returnObj: MittelType = {
      name: currentAbwehrmittel.name,
      width: averageWidth,      
      inventory: numberOfMittel
    }
    return returnObj;
  }


  return (
    <div className="defaultBox">
      <h2>Berechnung</h2>
      <div className="input">
          <label>Breite der Absperrung (in cm)</label>
          <input
            type="number"
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setWidth(isNaN(value) ? null : value);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter'){
                calculate()}
            }}
          />
      </div>
      <button onClick={calculate}>Berechnen</button>
    </div>
  );
};

export default Calculation;


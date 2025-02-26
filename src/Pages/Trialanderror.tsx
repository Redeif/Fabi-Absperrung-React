import { useState, useContext, useEffect } from "react";
import { AbwehrmittelContext } from "../Components/AbwehrmittelContext";
import GivenVariables from "../Components/GivenVariables";
import Visualisation from "../Components/Visualisation";
import InputMittel from "../Components/InputMittel";

const Trialanderror = () => {
  const [width, setWidth] = useState<number | null>(0);

  const context = useContext(AbwehrmittelContext);
  if (!context) return <p>Fehler: Context nicht gefunden!</p>;

  const { Abwehrmittel, calculateAvarageWidth, averageWidth } = context;

  

  // useEffect für automatische Berechnung
  useEffect(() => {
    calculateAvarageWidth(width);
  }, [width, Abwehrmittel]);

  return (
    <div className="mainTrailandError">
    <GivenVariables></GivenVariables>
    <div className="variables">
      <h2>Berechnung</h2>
      <div className="input">
        <label>Breite der Absperrung (in cm)</label>
        <input
          type="number"
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setWidth(isNaN(value) ? null : value);
          }}
        />
      </div>
      <InputMittel averageWidth={averageWidth}/>
    </div>
    <div>
      <Visualisation widthBetween={averageWidth} widthEnd={averageWidth} />
    </div>
    </div>
  );
};

export default Trialanderror;

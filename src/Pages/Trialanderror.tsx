import { useState, useContext, useEffect } from "react";
import { AbwehrmittelContext } from "../Components/AbwehrmittelContext";
import GivenVariables from "../Components/GivenVariables";
import Visualisation from "../Components/Visualisation";
import InputMittel from "../Components/InputMittel";

const Trialanderror = () => {
  const [width, setWidth] = useState<number>(0);

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
    <div className="defaultBox calculation">
      <h2>Berechnung</h2>
      <div className="input">
        <label>Breite der Absperrung (in cm)</label>
        <input
          type="number"
          value={width}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            const newValue = Math.max(0, Number(value));
            setWidth(newValue);
          }}
        />
      </div>
      <InputMittel averageWidth={averageWidth}/>
    </div>
    <div>
      <Visualisation widthBetween={averageWidth} average={true}/>
    </div>
    </div>
  );
};

export default Trialanderror;

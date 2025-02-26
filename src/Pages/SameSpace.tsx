import { useState, useContext, useEffect } from "react";
import { AbwehrmittelContext, maxWidth, minWidth } from "../Components/AbwehrmittelContext";
import GivenVariables from "../Components/GivenVariables";
import Visualisation from "../Components/Visualisation";
import InputMittel from "../Components/InputMittel";

const SameSpace = () => {
  const [width, setWidth] = useState<number | null>(0);
  const [widthBetween, setWidthBetween] = useState<number>(minWidth)

  const context = useContext(AbwehrmittelContext);
  if (!context) return <p>Fehler: Context nicht gefunden!</p>;

  const { Abwehrmittel, calculateAvarageWidth, averageWidth, calculateRestWidth, restWidth } = context;


  // useEffect für automatische Berechnung
  useEffect(() => {
    calculateAvarageWidth(width);
    calculateRestWidth(width, widthBetween)
  }, [width, Abwehrmittel, widthBetween]);

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
        <label>Abstand zwischen Absperrmittel (in cm)</label>
        <input
          type="number"
          value={widthBetween}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            setWidthBetween(value);
          }}
        />
      </div>
      <InputMittel averageWidth={averageWidth}/>
    </div>
    <div>
      <Visualisation widthBetween={widthBetween} widthEnd={restWidth} />
    </div>
    </div>
  );
};

export default SameSpace;

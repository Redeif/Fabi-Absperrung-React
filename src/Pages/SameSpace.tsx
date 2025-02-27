import { useState, useContext, useEffect } from "react";
import { AbwehrmittelContext, minWidth } from "../Components/AbwehrmittelContext";
import GivenVariables from "../Components/GivenVariables";
import Visualisation from "../Components/Visualisation";
import InputMittel from "../Components/InputMittel";

const SameSpace = () => {
  const [width, setWidth] = useState<number>(0);
  const [widthBetween, setWidthBetween] = useState<number>(minWidth)

  const context = useContext(AbwehrmittelContext);
  if (!context) return <p>Fehler: Context nicht gefunden!</p>;

  const { Abwehrmittel, calculateAvarageWidth, averageWidth, calculateRestWidth, restWidth } = context;


  useEffect(() => {
    calculateAvarageWidth(width);
    calculateRestWidth(width, widthBetween)
  }, [width, Abwehrmittel, widthBetween]);

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
        <label>Abstand zwischen Absperrmittel (in cm)</label>
        <input
          type="number"
          value={widthBetween}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            const newValue = Math.max(0, Number(value));
            setWidthBetween(newValue);
          }}
        />
      </div>
      <InputMittel averageWidth={averageWidth}/>
    </div>
    <div>
        <Visualisation widthBetween={widthBetween} restWidth={restWidth} average={false}/>
    </div>
    </div>
  );
};

export default SameSpace;

import { useState, useContext } from "react";
import { AbwehrmittelContext } from "./AbwehrmittelContext";
import { maxWidth } from "./AbwehrmittelContext";
import { MittelType } from "../Defaults/types";

const Calculation = () => {
  const context = useContext(AbwehrmittelContext);
  if (!context) return <p>Fehler: Context nicht gefunden!</p>;

  const {
    Abwehrmittel,
    setSolution,
    favouriteAbwehrmittel,
    setFavouriteAbwehrmittel
  } = context;

  const [width, setWidth] = useState<number | null>(null);

  const calculate = () => {
    if (width === null || width <= 2 * maxWidth) {
      setSolution([]);
      return;
    }

    const currentAbwehrmittel = Abwehrmittel.find(
      (mittel) => mittel.name === favouriteAbwehrmittel
    );

    if (!currentAbwehrmittel) {
      setSolution([]);
      return;
    }

    // Berechnung der Anzahl der Absperrmittel
    const availableWidth = width - 2 * maxWidth; // Restliche Breite nach den Randabständen
    const totalSegmentWidth = currentAbwehrmittel.width + maxWidth; // Ein Absperrmittel + ein Abstand
    const numberOfMittel = Math.ceil(availableWidth / totalSegmentWidth); // Anzahl der Absperrmittel

    setSolution([
      {
        name: favouriteAbwehrmittel,
        width: (availableWidth-numberOfMittel*currentAbwehrmittel.width)/(numberOfMittel-1),
        inventory: numberOfMittel
      }
    ]);

    console.log(`Anzahl der Absperrmittel: ${numberOfMittel}`);
  };

  return (
    <div className="variables">
      <h1>Berechnung</h1>
      <div className="input">
        <div>
          <label>Breite der Absperrung (in cm)</label>
          <label>Bevorzugtes Absperrmittel</label>
        </div>
        <div>
          <input
            type="number"
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              setWidth(isNaN(value) ? null : value);
            }}
          />
          <select
            value={favouriteAbwehrmittel}
            onChange={(e) => setFavouriteAbwehrmittel(e.target.value)}
          >
            {Abwehrmittel.map((mittel: MittelType) => (
              <option key={mittel.name} value={mittel.name}>
                {mittel.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button onClick={calculate}>Berechnen</button>
    </div>
  );
};

export default Calculation;

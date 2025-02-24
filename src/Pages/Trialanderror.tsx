import { useState, useContext, useEffect } from "react";
import { AbwehrmittelContext, maxWidth, minWidth } from "../Components/AbwehrmittelContext";
import GivenVariables from "../Components/GivenVariables";

const Trialanderror = () => {
  const [width, setWidth] = useState<number | null>(0);
  const [averageWidth, setAverageWidth] = useState(0);

  const context = useContext(AbwehrmittelContext);
  if (!context) return <p>Fehler: Context nicht gefunden!</p>;

  const { Abwehrmittel, setAbwehrmittel } = context;

  const calculate = () => {
    if (width === null || width === 0){
      setAverageWidth(0)
      return;
    }
    if (width - maxWidth <0){
      setAverageWidth(0)
      return;
    }
    const availableWidth = width - maxWidth;
    let totalSegmentWidth = 0;
    let abwehrmittelbreiteGesamt = 0;
    let totalInventory = 0;

    Abwehrmittel.forEach((element) => {
      console.log(element)
      totalSegmentWidth += element.inventory * (element.width + maxWidth);
      abwehrmittelbreiteGesamt += element.inventory * element.width;
      totalInventory += element.inventory
    });
    if (totalSegmentWidth === 0 || totalInventory ===0){
      setAverageWidth(0)
      return
    }

    setAverageWidth(
      parseFloat(((availableWidth - abwehrmittelbreiteGesamt) / (totalInventory)).toFixed(2))
    );

  };

  // useEffect für automatische Berechnung
  useEffect(() => {
    calculate();
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
      <div className="inputNumberMittel">
        {Abwehrmittel.map((mittel) => (
          <div className="abwehrmittel" key={mittel.name}>
            <h3>{mittel.name}</h3>
            <p>{mittel.width} cm</p>
            <input
              type="number"
              value={mittel.inventory != 0 ? mittel.inventory: ""} // Damit das Input-Feld immer den aktuellen Wert zeigt
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                setAbwehrmittel((prev) =>
                  prev.map((searcheMittel) =>
                    searcheMittel.name === mittel.name ? { ...searcheMittel, inventory: value } : searcheMittel
                  )
                );
              }}
            />
            <button onClick={() =>{
                              setAbwehrmittel((prev) =>
                                prev.map((searcheMittel) =>
                                  searcheMittel.name === mittel.name ? { ...searcheMittel, inventory: 0 } : searcheMittel
                                )
                              );
            }}>❌ delete</button>
          </div>
        ))}
        <div className="avarageSolution">
        {averageWidth < 0 ? (
            <p className="error">Es wurden zu viele Absperrmittel genutzt</p>
          ) : averageWidth === 0 ? (
            <p className="error">Es fehlen Informationen</p>
          ) : averageWidth >= minWidth && averageWidth <= maxWidth ? (
            <p className="goodSolution">Abstand zwischen Abwehrmittel: {averageWidth}</p>
          ) : (
            <p className="badSolution">Abstand zwischen Abwehrmittel: {averageWidth}</p>
          )}
        </div>
        </div>
    </div>
    <div>
      <table>
        <tbody>
          <tr>
            <td>Wand</td>
            {Abwehrmittel.map((mittel) => {
                if (mittel.inventory > 0) {
                  const tableCells = [];
                  for (let index = 0; index < mittel.inventory; index++) {
                    tableCells.push(
                      <>
                        <td key={`distanz-${mittel.name}-${index}`}>{averageWidth} cm</td>
                        <td key={`mittel-${mittel.name}-${index}`}>{mittel.name}</td>
                      </>
                    );
                  }
                  return <>{tableCells}</>;
                } else {
                  return null;
                }
              })}
            <td>{averageWidth} cm</td>
            <td>Wand</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Trialanderror;

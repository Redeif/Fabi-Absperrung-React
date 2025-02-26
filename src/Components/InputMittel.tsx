import { useContext } from "react";
import { AbwehrmittelContext, minWidth, maxWidth} from "../Components/AbwehrmittelContext";

interface InputMittel {
    averageWidth: number,
  }

const InputMittel = ({averageWidth}: InputMittel) => {

    const context = useContext(AbwehrmittelContext);
    if (!context) return <p>Fehler: Context nicht gefunden!</p>;
    const { Abwehrmittel, setAbwehrmittel } = context; 


  return (
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
            <p className="goodSolution">Abstand zwischen Abwehrmittel: {averageWidth} cm</p>
          ) : (
            <p className="badSolution">Abstand zwischen Abwehrmittel: {averageWidth} cm</p>
          )}
        </div>
        </div>
  )
}

export default InputMittel
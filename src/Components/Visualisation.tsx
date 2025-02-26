import { useContext } from "react";
import { AbwehrmittelContext, minWidth, maxWidth} from "../Components/AbwehrmittelContext";

interface VisualisationProps {
  widthBetween: number,
  widthEnd:number
}

const Visualisation = ({ widthBetween, widthEnd }: VisualisationProps) => {

    const context = useContext(AbwehrmittelContext);
    if (!context) return <p>Fehler: Context nicht gefunden!</p>;
    const { Abwehrmittel } = context; 

  return (
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
                    <td key={`distanz-${mittel.name}-${index}`}>{widthBetween} cm</td>
                    <td key={`mittel-${mittel.name}-${index}`}>{mittel.name}</td>
                  </>
                );
              }
              return <>{tableCells}</>;
            } else {
              return null;
            }
          })}
          {widthEnd<0 ? (<td className="error">{widthEnd} cm</td>) : widthEnd<=maxWidth ? (<td className="goodSolution">{widthEnd} cm</td>) : (<td className="badSolution">{widthEnd} cm</td>)}
        <td>Wand</td>
      </tr>
    </tbody>
  </table>
  )
}

export default Visualisation
import { useContext } from "react";
import { AbwehrmittelContext} from "../Components/AbwehrmittelContext";

interface VisualisationProps {
  widthBetween: number,
  restWidth?:number,
  average: boolean
}

const Visualisation = ({ widthBetween, restWidth, average }: VisualisationProps) => {

    const context = useContext(AbwehrmittelContext);
    if (!context) return <p>Fehler: Context nicht gefunden!</p>;
    const { Abwehrmittel } = context; 

    let endWidth= widthBetween
    let startWidth= widthBetween

    if(!average){
      if(restWidth == 0 || restWidth == undefined){
        endWidth = 0
        startWidth = 0
      }else {
        endWidth = parseFloat((restWidth/2).toFixed(2))
        startWidth = parseFloat((restWidth/2).toFixed(2))
      }
    } 

    const endWidthBox = () => {
            if(!average){
            let totalNumberOfMittel = 0
            Abwehrmittel.forEach(element => {
                totalNumberOfMittel += element.inventory
            });

            if(totalNumberOfMittel ==0){
                return <> <td>{restWidth} cm</td></>
            }else return <><td>{endWidth} cm</td></>
        }else{
            return <><td>{widthBetween} cm</td></>
        }

    }

  return (
    <table>
    <tbody>
      <tr>
        <td>Wand</td>
        {Abwehrmittel.map((mittel, indexAbwehrmittel) => {
            if (mittel.inventory > 0) {
              const tableCells = [];
              for (let index = 0; index < mittel.inventory; index++) {
                if(indexAbwehrmittel == 0 && index == 0){
                    tableCells.push(
                        <>
                          <td key={`distanz-${mittel.name}-${index}`}>{startWidth} cm</td>
                        </>
                      );
                }else{
                    tableCells.push(
                        <>
                          <td key={`distanz-${mittel.name}-${index}`}>{widthBetween} cm</td>
                        </>
                      );
                }
                tableCells.push(
                    <>
                      <td key={`mittel-${mittel.name}-${index}`}>{mittel.name}</td>
                    </>
                  );

              }
              return <>{tableCells}</>;
            } else {
              return null;
            }
          })}
          {endWidthBox()}
        <td>Wand</td>
      </tr>
    </tbody>
  </table>
  )
}

export default Visualisation
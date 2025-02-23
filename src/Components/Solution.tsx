import {  useContext } from 'react'
import { AbwehrmittelContext } from "./AbwehrmittelContext";

const Solution = () => {

  const context = useContext(AbwehrmittelContext);
  if (!context) throw new Error("AbwehrComponent must be inside AbwehrmittelProvider");
  const { solution } = context;

  console.log(`Solution ${solution}`)
  console.log(solution)

  return (
      <div className='variables'>
        <h2 className='ergebnis'>Ergebnis</h2>
        {solution.length != 0 && 
        <div>
          <p>Bevorzugtes Absperrmittel: {solution[0].name}</p>
          <p>Menge Benötigt: {solution[0].inventory}</p>
          <p>Gleichmäßiger Abstand: {Math.ceil(solution[0].width)}</p>
        </div>}
        
      </div>
  )
}

export default Solution
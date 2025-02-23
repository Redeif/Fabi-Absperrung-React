import {  useContext, useState,useEffect } from 'react'
import { AbwehrmittelContext } from "./AbwehrmittelContext";
import { SolutionType } from '../Defaults/types';

const Solution = () => {
  const [oldSolutions, setOldSolutions] = useState<SolutionType[]>([])
  const context = useContext(AbwehrmittelContext);
  if (!context) throw new Error("AbwehrComponent must be inside AbwehrmittelProvider");
  const { solution } = context;

  useEffect(() => {
    if (solution) {
      let currentBestSolution: { name: string; difference: number } = { name: '', difference: 1.1 };
  
      solution.types.forEach((element) => {
        if (Math.ceil(element.inventory) - element.inventory < currentBestSolution.difference) {
          currentBestSolution = {
            name: element.name,
            difference: Math.ceil(element.inventory) - element.inventory,
          };
        }
      });
  
      solution.bestSolution = currentBestSolution.name;

      setOldSolutions((prev) => [solution, ...prev]);
    }
  }, [solution]);
  


  const deleteSolutions = () =>{
    setOldSolutions([])
  }


  return (
      <div className='variables ergebnisse'>
        <h2>Ergebnis</h2>
        <button onClick={deleteSolutions}>Delete old Solutions</button>
        <div className='mainSolution'>
        <div className='solutions'>
        {oldSolutions.length != 0 &&
        oldSolutions.map((currentSolution,i)=>{
          return <div>
                  <div className='solutiongroup' key={i}>
                    <div className='someSolution'>
                      <h2>Breite der Berechnung {currentSolution.solutionWidth} cm</h2>
                    </div>
                    {currentSolution.types.map((element, index)=>{
                    return <div className={element.name !=currentSolution.bestSolution ? 'someSolution' : 'bestSolution'}  key={index}>
                              <p>{element.name}</p>
                              <p>Menge Benötigt: {Math.ceil(element.inventory)} Stk.</p>
                              <p>Gleichmäßiger Abstand: {element.width} cm</p>
                            </div>
                      
                    })}
                  </div>
                  </div>
            
          
        })
         }
        </div>
      </div>
      </div>
  )
}

export default Solution


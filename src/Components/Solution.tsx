import {  useContext, useState,useEffect } from 'react'
import { AbwehrmittelContext } from "./AbwehrmittelContext";
import { MittelType } from '../Defaults/types';

const Solution = () => {
  const [bestSolution, setBestSolution] = useState<string>('')
  const [oldSolutions, setOldSolutions] = useState<MittelType[][]>([])
  const context = useContext(AbwehrmittelContext);
  if (!context) throw new Error("AbwehrComponent must be inside AbwehrmittelProvider");
  const { solution } = context;

  useEffect(() => {
    oldSolutions.unshift(solution)
    let currentBestSolution: {name: string, difference: number} = {name: '', difference: 1.1}
    solution.forEach(element => {
      if(Math.ceil(element.inventory)-element.inventory < currentBestSolution.difference){
        currentBestSolution=
          {name: element.name, 
            difference: Math.ceil(element.inventory)-element.inventory
          }
      }
      setBestSolution(currentBestSolution.name)
    });


  },[solution]);


  return (
      <div className='variables'>
        <h2>Ergebnis</h2>
        {solution.length != 0 && 
        <div className='solutiongroup'>
          {solution.map((element, index)=>{
          return <div className={element.name !=bestSolution ? 'someSolution' : 'bestSolution'} key={index}>
              <p>{element.name}</p>
              <p>Menge Benötigt: {Math.ceil(element.inventory)} Stk.</p>
              <p>Gleichmäßiger Abstand: {element.width} cm</p>
            </div>
          })}
          
        </div>}
        
      </div>
  )
}

export default Solution
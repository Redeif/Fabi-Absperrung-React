import { useContext } from 'react';
import { MittelType } from '../Defaults/types.ts'
import { minWidth, maxWidth } from './AbwehrmittelContext.tsx'
import { AbwehrmittelContext } from "./AbwehrmittelContext";

const GivenVariables = () => {

    const context = useContext(AbwehrmittelContext);
    if (!context) throw new Error("AbwehrComponent must be inside AbwehrmittelProvider");
    const { Abwehrmittel } = context;

      

  return (
    <div className='variables'>
    <h2>Gegebene Variablen</h2>
    <table>
      <tbody>
    <tr>
    <th>Abwehrmittel</th>
    <th>Breite</th>
  </tr>
  </tbody>
  <tbody>
  {Abwehrmittel.map((mittel:MittelType) => (
    <tr>
    <td>{mittel.name}</td>
    <td>{mittel.width}</td>
    </tr>))}
  </tbody>
    </table>
    <table>
      <tbody>
          <tr>
              <th>minimaler Abstand</th>
              <th>{minWidth}</th>
          </tr>
          <tr>
              <th>maximaler Abstand</th>
              <th>{maxWidth}</th>
          </tr>
        </tbody>
    </table>
    </div>
  )
}

export default GivenVariables

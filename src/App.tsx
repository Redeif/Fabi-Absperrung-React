import GivenVariables from './Components/GivenVariables'
import './App.css'
import Calculation from './Components/Calculation'
import { AbwehrmittelProvider } from "./Components/AbwehrmittelContext"
import Solution from './Components/Solution'

const App = () => {
  return (
    <AbwehrmittelProvider >

      <h1>Fabi's Absperrmittel Rechner</h1>
      <div className='main'>
        <div className='information'>
          <Calculation></Calculation>
          <GivenVariables></GivenVariables>
        </div>
        <Solution></Solution>
      </div>
    </AbwehrmittelProvider>
  );
};

export default App


//<AbwehrComponent />

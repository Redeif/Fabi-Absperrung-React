import GivenVariables from '../Components/GivenVariables'
import Calculation from '../Components/Calculation'
import Solution from '../Components/Solution'

const CalculatorPage = () => {
  return (
    <>
          <div className='main'>
            <div className='information'>
              <Calculation></Calculation>
              <GivenVariables></GivenVariables>
            </div>
            <Solution></Solution>
          </div>
    </>
  )
}

export default CalculatorPage
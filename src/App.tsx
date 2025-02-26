import { Routes, Route } from "react-router";

import './App.css'

import { AbwehrmittelProvider } from "./Components/AbwehrmittelContext"

import Header from './Components/Header'
import CalculatorPage from './Pages/CalculatorPage';
import Trialanderror from "./Pages/Trialanderror";
import SameSpace from "./Pages/SameSpace";

const App = () => {
  return (
    <AbwehrmittelProvider >
      <h1>Fabi's Absperrmittel Rechner</h1>
      <Header></Header>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route path="/trialanderror" element={<Trialanderror></Trialanderror>} />
          <Route path="/samespace" element={<SameSpace></SameSpace>}/>
        </Routes>
      
    </AbwehrmittelProvider>
  );
};

export default App


//<AbwehrComponent />

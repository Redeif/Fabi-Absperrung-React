import { Routes, Route } from "react-router";

import './App.css'

import { AbwehrmittelProvider } from "./Components/AbwehrmittelContext"

import Header from './Components/Header'
import CalculatorPage from './Pages/CalculatorPage';
import Trailanderror from "./Pages/Trailanderror";

const App = () => {
  return (
    <AbwehrmittelProvider >
      <h1>Fabi's Absperrmittel Rechner</h1>
      <Header></Header>
        <Routes>
          <Route path="/Fabi-Absperrung-React/" element={<CalculatorPage />} />
          <Route path="/Fabi-Absperrung-React/trailanderror" element={<Trailanderror></Trailanderror>} />
        </Routes>
      
    </AbwehrmittelProvider>
  );
};

export default App


//<AbwehrComponent />

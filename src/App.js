
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Daily from './Components/DailyBusiness/Daily';
import DailyBusiness from './Components/DailyBusiness/DailyBusiness';
import DailybusinessDetails from './Components/DailyBusiness/DailybusinessDetails';
import Ekok from './Components/Ekok/Ekok';
import Div from './Components/EkokSc/Div';
import ZoneEkok from './Components/EkokSc/EkokZone/ZoneEkok';
import Header from './Components/Header/Header';
import Notfound from './Components/NotFound/Notfound';
import Sb from './Components/Sb/Sb';
import SbScResult from './Components/Sb/SbScResult';
import SbZone from './Components/Sb/SbZone';
import Total from './Components/Total_business/Total';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Ekok></Ekok>}>EKOK</Route>
        <Route path='/Sb-office' element={<Sb></Sb>}>SB</Route>
        <Route path='/Total_Business' element={<Total></Total>}>SB</Route>
        <Route path='/Daily_Business' element={<Daily></Daily>}>SB</Route>

        <Route path='/DIV_CODE=:id' element={<Div></Div>}>Sc</Route>
        <Route path='/DIV_SB_CODE=:id' element={<SbScResult></SbScResult>}>Sb_Sc</Route>
        <Route path='/Daily_business=:from=:to' element={<DailybusinessDetails></DailybusinessDetails>}>Sb_Sc</Route>

        <Route path='/SCCODE=:id' element={<ZoneEkok></ZoneEkok>}>Zone</Route>
        <Route path='/SC_SB_CODE=:id' element={<SbZone></SbZone>}>Sb_Zone</Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>

    </div>
  );
}

export default App;

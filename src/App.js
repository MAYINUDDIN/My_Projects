
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Daily from './Components/DailyBusiness/Daily';
import DailyBusiness from './Components/DailyBusiness/DailyBusiness';
import DailybusinessDetails from './Components/DailyBusiness/DailybusinessDetails';
import Final_business from './Components/DailyBusiness/Final_business';
import Ekok from './Components/Ekok/Ekok';
import Div from './Components/EkokSc/Div';
import ZoneEkok from './Components/EkokSc/EkokZone/ZoneEkok';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Notfound from './Components/NotFound/Notfound';
import Statement from './Components/Pol_statement/Statement';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Sb from './Components/Sb/Sb';
import SbScResult from './Components/Sb/SbScResult';
import SbZone from './Components/Sb/SbZone';
import Total from './Components/Total_business/Total';



function App() {
  return (
    <div className="App">


      <Header></Header>
      <Routes>
        <Route path='/' element={<Login></Login>}  >
          Login
        </Route>
        <Route path='/Register' element={<Register></Register>}  >
          Register
        </Route>

        <Route path='/ekok' element={<PrivateRoute><Ekok></Ekok></PrivateRoute>}>EKOK</Route>
        <Route path='/Sb-office' element={<PrivateRoute><Sb></Sb></PrivateRoute>}>SB</Route>
        <Route path='/Total_Business' element={<PrivateRoute><Total></Total></PrivateRoute>}>SB</Route>
        <Route path='/Statement' element={<PrivateRoute><Statement></Statement></PrivateRoute>}>Statement</Route>
        {/* <Route path='/Daily_Business' element={<PrivateRoute><DailyBusiness></DailyBusiness></PrivateRoute>}>SB</Route> */}
        <Route path='/Daily_Business' element={<DailyBusiness></DailyBusiness>}>SB</Route>

                <Route path='/Final_business' element={<Final_business></Final_business>}>SB</Route>

        <Route path='/DIV_CODE=:id' element={<PrivateRoute><Div></Div></PrivateRoute>}>Sc</Route>
        <Route path='/DIV_SB_CODE=:id' element={<PrivateRoute><SbScResult></SbScResult></PrivateRoute>}>Sb_Sc</Route>
        <Route path='/Daily_business=:from=:to' element={<PrivateRoute><DailybusinessDetails></DailybusinessDetails></PrivateRoute>}>Sb_Sc</Route>

        <Route path='/SCCODE=:id' element={<PrivateRoute><ZoneEkok></ZoneEkok></PrivateRoute>}>Zone</Route>
        <Route path='/SC_SB_CODE=:id' element={<PrivateRoute><SbZone></SbZone></PrivateRoute>}>Sb_Zone</Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>

    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ekok from './Components/Ekok/Ekok';
import Header from './Components/Header/Header';
import Notfound from './Components/NotFound/Notfound';
import Sb from './Components/Sb/Sb';
import Total from './Components/Total_business/Total';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Ekok></Ekok>}>EKOK</Route>
        <Route path='/Sb-office' element={<Sb></Sb>}>SB</Route>
        <Route path='/Total_Business' element={<Total></Total>}>SB</Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>

    </div>
  );
}

export default App;

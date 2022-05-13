import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import CustomAppointment from './Pages/CustomAppointment/CustomAppointment';

function App() {
  return (
    <div className='max-width-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/appointment' element={<CustomAppointment/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

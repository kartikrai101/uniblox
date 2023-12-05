import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/login" element={<Login/>} ></Route>
      <Route exact path="/register" element={<Register/>} ></Route>
      <Route exact path="/unishop/home" element={<Homepage/>} ></Route>
    </Routes>
  );
}

export default App;

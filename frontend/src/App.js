import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Homepage from './components/pages/Homepage';
import ProductDetails from './components/pages/ProductDetails';
import Cart from './components/pages/Cart';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/login" element={<Login/>} ></Route>
      <Route exact path="/register" element={<Register/>} ></Route>
      <Route exact path="/unishop/home/:id" element={<Homepage/>} ></Route>
      <Route exact path="/product/:id" element={<ProductDetails />} ></Route>
      <Route exact path="/cart" element={<Cart />}></Route>
    </Routes>
  );
}

export default App;

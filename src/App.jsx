import './App.css';
import Navbar from './component/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
   
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  
  );
}

export default App;

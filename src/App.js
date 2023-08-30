import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopCartContextProvider } from './context/shopContext';


function App() {
  return (
    <div className="App">
      <ShopCartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopCartContextProvider>
    </div>
  );
}

export default App;

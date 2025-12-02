import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Food from './components/Food.jsx';
import Navbar from './components/Navbar.jsx'; 
import Checkout from './components/Checkout.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';


const HomePage = () => (
  <>
    <Home />
    <Footer />
  </>
);


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Food" element={<Food/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>


     

    </>
  );
}

export default App;
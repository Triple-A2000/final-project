import Product from './pages/Product';
import Cart from "./pages/Cart";
import axios from 'axios';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";



function App() {
  
  const URL = 'https://fakestoreapi.com/products';

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchProducts();
  }, []);
  
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      < Footer />
    </>
  );
}

export default App;
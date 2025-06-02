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
  const [cart, setCart] = useState([]);

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

  // For +
  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // For -
  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // For full removal
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const getQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
  };
  
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="product/:id" element={<Product cart={cart} addToCart={addToCart} getQuantity={getQuantity} />} />
          <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
      </main>
      < Footer />
    </>
  );
}

export default App;
import Product from './pages/Product';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";


function App() {
  
  const URL = 'https://fakestoreapi.com/products';

  const [productId, setProductId] = useState(1); // Temporary value
  const [message, setMessage] = useState('');
  const [product, setProduct] = useState('');
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchProduct = async() => {
      try {
        const response = await axios.get(`${URL}/${productId}`);
        setProduct(response.data);

      } catch (error) {
        console.log(error.message);
        setMessage('Product not found');
      }
    }
    
    fetchProduct();

  }, [productId]);

  useEffect(() => {
    const fetchSimilar = async() => {
      try {
        const response = await axios.get(URL);
        setSimilar(
          response.data.filter (
            p => p.category === product.category && p.id !== productId
          )
        );
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchSimilar();
  }, [product]);

  // <Product setProductId={setProductId} similar={similar} product={product}/> Keeping this here for reference DON'T DELETE

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      < Footer />
    
    </>
  );
}

export default App;
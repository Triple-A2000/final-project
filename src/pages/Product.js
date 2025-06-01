import { useState, useEffect } from "react";
import axios from "axios";
import ProductInfo from "../components/ProductInfo";
import SimilarProducts from "../components/SimilarProducts";
import { useParams } from "react-router-dom"; // Recommended by ChatGPT.
import { useCart } from "../context/CartContext";


function Product() {

  const URL = 'https://fakestoreapi.com/products';

  const { id } = useParams();
  const { addToCart, getQuantity } = useCart();

  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchProduct = async() => {
      try {
        const response = await axios.get(`${URL}/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    
    fetchProduct();

  }, [id]);

  useEffect(() => {
    const fetchSimilar = async() => {
      try {
        const response = await axios.get(URL);
        setSimilar(
          response.data.filter ( p => p.category === product.category && p.id !== product.id)
          .slice(0, 4));
        console.log(similar);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchSimilar();
  }, [product]);

  const quantityInCart = getQuantity(product?.id);

  return (
    <section className="product-page gap-20">
      <ProductInfo product={product} />
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        Add to Cart
      </button>
      {quantityInCart > 0 && (
        <p className="mt-2 text-green-600 font-semibold">
          Added to cart: {quantityInCart}
        </p>
      )}
      <SimilarProducts similar={similar} />
    </section>
  )
}


export default Product;
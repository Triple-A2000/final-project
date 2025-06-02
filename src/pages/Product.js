import { useState, useEffect } from "react";
import axios from "axios";
import ProductInfo from "../components/ProductInfo";
import SimilarProducts from "../components/SimilarProducts";
import { useNavigate, useParams } from "react-router-dom";

function Product({ cart, addToCart, getQuantity }) {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = 'https://fakestoreapi.com/products';

  const [product, setProduct] = useState(null);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URL}/${id}`);

        if (!response.data || !response.data.id) {
          navigate("/not-found"); 
        } else {
          setProduct(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error.message);
        navigate("/not-found");
      }
    };

    fetchProduct();
  }, [id, navigate]);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const response = await axios.get(URL);
        if (product) {
          const filtered = response.data
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
          setSimilar(filtered);
        }
      } catch (error) {
        console.error("Failed to fetch similar products:", error.message);
      }
    };

    if (product) {
      fetchSimilar();
    }
  }, [product]);

  const quantityInCart = getQuantity(product?.id);

  return (
    <section className="product-page gap-20 p-4">
      <ProductInfo product={product} onAddToCart={addToCart} quantityInCart={quantityInCart} />
      <SimilarProducts similar={similar} />
    </section>
  );
}

export default Product;

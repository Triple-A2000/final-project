import ProductInfo from "../components/ProductInfo";
import SimilarProducts from "../components/SimilarProducts";


function Product(props) {

  return (
    <section className="product-page gap-20">
      <ProductInfo product={props.product} />
      <SimilarProducts setProductId={props.setProductId} similar={props.similar} />
    </section>
  )
}


export default Product;
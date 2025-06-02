function ProductInfo({ product, onAddToCart, quantityInCart }) {

  if (!product) return null;


  return(
    <div className="product-container flex gap-20">
      <img className="product-pic" src={product.image} alt="Product Img" />
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <h2 className="price">{product.price}</h2>
        <p className="description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Add To Cart</button>
        { quantityInCart > 0 && ( <p>Added to cart: {quantityInCart}</p> ) }
      </div>
    </div>
  );
}

export default ProductInfo;
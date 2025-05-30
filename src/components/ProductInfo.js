function ProductInfo(props) {

  return(
    <div className="product-container flex gap-20">
      <img className="product-pic" src={props.product.image} alt="Product Picture" />
      <div className="product-info">
        <h3 className="product-name">{props.product.title}</h3>
        <h2 className="price">{props.product.price}</h2>
        <p className="description">{props.product.description}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductInfo;
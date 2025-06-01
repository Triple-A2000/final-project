const AddToCartButton = ({ product, addToCart, quantity }) => {
    return (
      <div className="mt-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Add to Cart
        </button>
        {quantity > 0 && (
          <p className="text-green-600 mt-2">In cart: {quantity}</p>
        )}
      </div>
    );
  };
  
  export default AddToCartButton;
  
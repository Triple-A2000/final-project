const CartItem = ({ item, addToCart, removeFromCart }) => {
    return (
      <div className="border p-4 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            -
          </button>
          <button
            onClick={() => addToCart(item)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  
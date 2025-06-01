const Cart = ({ cart, addToCart, removeFromCart }) => {
  const getItemTotal = (item) => item.price * item.quantity;

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + getItemTotal(item), 0).toFixed(2);
  };

  return (
    <section>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${getItemTotal(item).toFixed(2)}</p>
                </div>
              </div>

              <div>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}

          <div>
            <p>Total Price: ${getCartTotal()}</p>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;

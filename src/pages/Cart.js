import "../css/index.css";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  const getItemTotal = (item) => item.price * item.quantity;

  const getCartTotal = () => {
    return cart
      .reduce((total, item) => total + getItemTotal(item), 0)
      .toFixed(2);
  };

  return (
    <section className="cart-container">
      <h2 className="cart-header">Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <p>Total: ${getItemTotal(item).toFixed(2)}</p>
                </div>
              </div>
              <div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total-line">
            <p>Total: ${getCartTotal()}</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;

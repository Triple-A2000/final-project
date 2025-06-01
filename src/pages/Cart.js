import CartItem from "../components/CartItem";

function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section className="cart-page p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </section>
  );
}

export default Cart;

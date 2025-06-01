import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="cart-page p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
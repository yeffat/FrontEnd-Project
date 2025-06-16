import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAlert } from "../context/AlertContext";

const Cart = () => {
  const { cartItems, totalPrice, removeFromCart, clearCart } = useContext(CartContext);
  const { showAlert } = useAlert();

  if (cartItems.length === 0) {
    return (
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center  text-white p-8">
        <div className="max-w-4xl w-130 m-30 p-6 bg-white rounded-lg shadow-md flex-grow">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Shopping Cart</h1>
          <p className="text-gray-900">Your cart is currently empty.</p>
        </div>
      </div>
    );
  }

  const handleRemove = (id) => {
    removeFromCart(id);
    showAlert("Item removed from cart");
  };

  const handleClear = () => {
    clearCart();
    showAlert("Cart cleared");
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 min-h-[calc(100vh-4rem)] flex flex-col items-center text-white p-8">
      <div className="max-w-4xl w-full mt-10 p-6 bg-white rounded-lg shadow-md flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Shopping Cart</h1>
        <ul>
          {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
            <div className="flex items-center space-x-4">
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-gray-700">Price: ${item.price} each</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <p className="text-xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={handleClear}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

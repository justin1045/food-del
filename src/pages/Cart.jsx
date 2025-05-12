import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContex';

function Cart() {
  const { food_list, cartItems, removeFromCart } = useContext(StoreContext);

  const totalAmount = food_list.reduce((acc, item) => {
    if (cartItems[item._id] > 0) {
      return acc + item.price * cartItems[item._id];
    }
    return acc;
  }, 0);

  return (
    <div className="cart px-4 md:px-8 py-8 min-h-[60vh] flex flex-col">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Cart</h2>

      <div className="hidden md:grid grid-cols-6 gap-4 text-base font-semibold border-b pb-3 mb-4 text-gray-700">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={item._id}
              className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center border-b py-4 text-sm md:text-base"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded shadow"
              />
              <p className="font-medium text-gray-800">{item.name}</p>
              <p className="hidden md:block text-gray-600">₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p className="text-green-700 font-semibold">
                ₹{item.price * cartItems[item._id]}
              </p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-700 text-2xl font-extrabold"
              >
                ×
              </button>
            </div>
          );
        }
        return null;
      })}

      {totalAmount > 0 ? (
        <div className="text-right mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Total: <span className="text-green-700">₹{totalAmount}</span>
          </h3>
          <button className="mt-4 bg-red-500 text-white text-base px-6 py-2 rounded hover:bg-red-600 transition">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500 mt-10">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;

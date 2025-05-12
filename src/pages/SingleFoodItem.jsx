import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContex';

function SingleFoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item rounded-lg shadow-md overflow-hidden bg-white transition duration-300 hover:shadow-lg'>
      <div className="relative">
        <img src={image} alt={name} className="w-full h-72 object-cover" />
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className='absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400'
            aria-label="Add item"
          >
            <img src={assets.add_icon_white} alt="Add item" className="w-6 h-6" />
          </button>
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-full bg-amber-100 shadow-sm">
            <button
              onClick={() => removeFromCart(id)}
              className='bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400'
              aria-label="Remove item"
            >
              <img src={assets.remove_icon_red} alt="Remove item" className="w-5 h-5" />
            </button>
            <p className="text-gray-800 font-semibold">{cartItems[id]}</p>
            <button
              onClick={() => addToCart(id)}
              className='bg-green-500 hover:bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400'
              aria-label="Add item"
            >
              <img src={assets.add_icon_green} alt="Add item" className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <img src={assets.rating_stars} alt="rating" className="w-20 h-5" />
        </div>
        <div className="text-gray-700 text-sm mb-3">{description}</div>
        <p className="text-[tomato] font-bold text-lg">${price}</p>
      </div>
    </div>
  );
}

export default SingleFoodItem;
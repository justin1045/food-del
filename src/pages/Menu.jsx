import React, { useState, useContext } from 'react';
import { menu_list } from '../assets/assets';
import FoodDisplay from './FoodDisplay';
import { StoreContext } from '../context/StoreContex';

function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { category, setCategory } = useContext(StoreContext);

  return (
    <div className="explore-menu flex flex-col items-center gap-5 px-6 sm:px-4 py-8">
      <h1 className="text-3xl font-bold text-[#262626]">Explore our menu</h1>
      <p className="text-base text-gray-700 max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi vero voluptates architecto totam rerum placeat, odio, deleniti ipsam tempora earum exercitationem quod quam tempore? Blanditiis deserunt voluptate magni ex.
      </p>

      <div className="explore-menu-list flex gap-10 overflow-x-auto scrollbar-hide py-4">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (activeIndex === index) {
                setActiveIndex(null);
                setCategory("All");
              } else {
                setActiveIndex(index);
                setCategory(item.menu_name);
              }
            }}
            className="flex-shrink-0 text-center cursor-pointer transition duration-300"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[155px] h-[155px] object-cover rounded-full mx-auto 
                ${activeIndex === index ? 'border-4 border-red-500' : ''}`}
            />
            <p className="mt-2 font-medium text-sm">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="my-4 h-[2px] w-[74%] bg-[#e2e2e2] border-none" />
      <FoodDisplay />
    </div>
  );
}

export default Menu;

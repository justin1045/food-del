import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContex';
import SingleFoodItem from './SingleFoodItem';

function FoodDisplay() {
  const { food_list, category } = useContext(StoreContext);

  return (
    <div className='food-display'>
      <h2 className='text-2xl font-bold mb-4'>Top Dishes Near You</h2>
      <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {food_list.map((item, index) =>
          (category === "All" || item.category === category) && (
            <SingleFoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;

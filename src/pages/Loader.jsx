import React from 'react';
import './loader.css';

function FoodLoader() {
  return (
    <div className="loader-container">
      <div className="plate">
        <div className="cutlery">
          <div className="fork"></div>
          <div className="knife"></div>
        </div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
}

export default FoodLoader;

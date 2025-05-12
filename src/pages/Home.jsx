import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [dish, setDish] = useState('');
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRecipeFetch = async () => {
    if (!dish.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBHvOsv7gUXM7QBZwAeAe1uQ-jAiITa_Pw',
        {
          contents: [{ parts: [{ text: `Give me a recipe for ${dish}` }] }],
        }
      );
      const generated = res.data.candidates[0]?.content?.parts[0]?.text;
      setRecipe(generated || 'No recipe found.');
    } catch (error) {
      setRecipe('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="header mb-16 h-[600px] w-full px-10 sm:px-5 bg-[url('/header_img.png')] bg-no-repeat bg-cover bg-center relative rounded-3xl max-w-[90%] mx-auto">
        <div className="header-contents absolute bottom-[10%] left-[5%] right-[5%] flex flex-col gap-4 text-white max-w-[700px]">
          <h2 className="text-6xl sm:text-4xl font-extrabold leading-tight drop-shadow-lg">
            Order your favourite food here
          </h2>
          <p className="text-lg sm:text-sm font-normal drop-shadow-md">
            Delicious meals delivered at your doorstep. Choose from a wide range of dishes and enjoy fast delivery.
          </p>
          <Link to="/menu">
            <p className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded font-semibold w-fit text-base sm:text-sm">
              View Menu
            </p>
          </Link>
        </div>
      </div>

      {/* Recipe Section */}
      <div className="recipe-section max-w-4xl mx-auto px-5 py-10 text-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Want to cook something?</h3>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Enter dish name"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full sm:w-2/3"
          />
          <button
            onClick={handleRecipeFetch}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
          >
            Get Recipe
          </button>
        </div>

        {loading && <p className="mt-4 text-gray-500">Loading recipe...</p>}

        {recipe && (
          <div className="mt-6 text-left bg-gray-50 p-6 rounded shadow-sm whitespace-pre-wrap">
            <h4 className="text-xl font-bold mb-2 text-green-700">Recipe for {dish}:</h4>
            <p>{recipe}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

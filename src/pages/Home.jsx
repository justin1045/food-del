import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [dish, setDish] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const fetchRecipe = async () => {
    if (!dish.trim()) return;

    setLoading(true);
    setRecipe("");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `Give me a simple recipe for "${dish}". Include ingredients and steps.`,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            key: import.meta.env.VITE_geminiApiKey,
          },
        }
      );

      const result = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
      setRecipe(result || "No recipe found. Please try a different dish.");
    } catch (err) {
      console.error(err);
      setRecipe("❌ Failed to fetch recipe. Please check your API key or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchRecipe();
    }, 800);
  };

  return (
    <>
      {/* Header Section */}
      <div className="header mb-16 h-[600px] w-full px-6 sm:px-8 bg-[url('/header_img.png')] bg-no-repeat bg-cover bg-center relative rounded-3xl max-w-[90%] mx-auto">
        <div className="header-contents absolute bottom-[10%] left-[5%] right-[5%] flex flex-col gap-4 text-white max-w-[700px]">
          <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Order your favourite food here
          </h2>
          <p className="text-sm sm:text-lg font-normal drop-shadow-md">
            Delicious meals delivered at your doorstep. Choose from a wide range of dishes and enjoy fast delivery.
          </p>
          <Link to="/menu">
            <p className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-6 rounded font-semibold w-fit text-sm sm:text-base">
              View Menu
            </p>
          </Link>
        </div>
      </div>

      {/* Recipe Generator Section */}
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-800">
          🍽️ AI Recipe Generator
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <input
            type="text"
            placeholder="Enter a dish name (e.g., Pasta)"
            value={dish}
            onChange={(e) => setDish(e.target.value)}
            className="w-full sm:w-2/3 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleClick}
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Get Recipe"}
          </button>
        </div>

        {recipe && (
          <div className="bg-white p-6 border rounded-md shadow-md text-left whitespace-pre-wrap text-gray-800 max-h-[500px] overflow-y-auto">
            <h4 className="text-xl font-semibold mb-2 text-green-700">🍴 Recipe:</h4>
            <p>{recipe}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

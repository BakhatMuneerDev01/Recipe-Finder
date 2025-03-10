import React, { useState, useEffect } from 'react'
import { Search } from 'lucide-react';
import RecipeCard from '../RecipeCard';
import { getRandomColor } from '../../lib/utils';

const APP_ID=import.meta.env.VITE_APP_ID
const APP_KEY=import.meta.env.VITE_APP_KEY
const USER_ID=import.meta.env.USER_ID

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`, {
        headers: {
          'Edamam-Account-User': USER_ID
        }
      });
      const data = await res.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes("chicken");
  },[]);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value)
  }

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size="24px" />
            <input type="text" placeholder="Search for a recipe" className="text-sm md:text-md grow " />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {!loading && recipes.map(({recipe}, index) => (
            <RecipeCard key={index} recipe={recipe} 
            {...getRandomColor()}
            />
          ))}

          {loading && [...Array(9)].map((_, index) => (
            <div key={index} className="flex flex-col gap-4 w-full">
              <div className="skeleton h-32 w-full">
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
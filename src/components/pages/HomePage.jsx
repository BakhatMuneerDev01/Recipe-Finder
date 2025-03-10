import React from 'react'
import { Heart, HeartPulse, Search, Soup } from 'lucide-react';
import RecipeCard from '../RecipeCard';

const HomePage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size="24px" />
            <input type="text" placeholder="Search for a recipe" className="text-sm md:text-md grow " />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recomended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular Choices
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Recipe one */}
          <RecipeCard />
          {/* Recipe two */}
          <RecipeCard />
          {/* Recipe three */}
          <RecipeCard />
          {/* Recipe four */}
          <RecipeCard />
          {/* Recipe five */}
          <RecipeCard />
          {/* Recipe six */}
          <RecipeCard />
          {/* Recipe seven */}
          <RecipeCard />
          {/* Recipe eight */}
          <RecipeCard />
          {/* Recipe nine */}
          <RecipeCard />
          {/* Recipe ten */}
          <RecipeCard />
          {/* Recipe eleven */}
          <RecipeCard />
          {/* Recipe twelve */}
          <RecipeCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
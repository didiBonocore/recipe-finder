import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./Recipes.css";

export default function Recipes() {
  const appId = "b06756cd";
  const appKey = "2dce3a350c95b42c82f0e0a7d6fc31f6";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="Recipes">
      <form className="search-form" onSubmit={getSearch}>
        <div>
          <input
            type="text"
            value={search}
            onChange={updateSearch}
            className="search-bar"
            placeholder="Type and ingredient..."
          />
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

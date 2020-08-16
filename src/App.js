import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "64958b81";
  const APP_KEY = "053aace91356d4247b2ca5ff67b21355	";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App" >
      <h1>Hello React</h1>
      <form onSubmit={getSearch} className="search-form" action="">

        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>

  );
};

export default App;
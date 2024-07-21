import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parfait from '../assets/parfait.jpg';
import toast from '../assets/toast.jpg';
import bananaBites from '../assets/banana-bites.jpg';
import springRolls from '../assets/spring-rolls.jpg';
import buddhaBowl from '../assets/buddha-bowl.jpg';
import teriyakiSalmonSushiBowl from '../assets/teriyaki-salmon-sushi-bowl.jpg';
import '../App.css';

const PopularRecipes = () => {
  const recipes = [
    { name: 'Parfait', img: parfait, path: '/recipe/parfait', type: 'Dessert' },
    { name: 'Toast', img: toast, path: '/recipe/toast', type: 'Breakfast' },
    { name: 'Banana Bites', img: bananaBites, path: '/recipe/banana-bites', type: 'Snack' },
    { name: 'Spring Rolls', img: springRolls, path: '/recipe/spring-rolls', type: 'Appetizer' },
    { name: 'Buddha Bowl', img: buddhaBowl, path: '/recipe/buddha-bowl', type: 'Main' },
    { name: 'Teriyaki Salmon Sushi Bowl', img: teriyakiSalmonSushiBowl, path: '/recipe/teriyaki-salmon-sushi-bowl', type: 'Main' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'All' || recipe.type === filterType)
  );

  return (
    <div className="popular-recipes-container">
      <h1>Popular Recipes</h1>
      <p>To view recipes you can click on the picture.</p>
      <div className="search-filter-container">
        <div className="search-bar">
          <span className="search-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#97A778" d="M10,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18ZM10,4A6,6,0,1,0,16,10,6,6,0,0,0,10,4Z"></path>
              <path fill="#97A778" d="M21,21a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42l5,5A1,1,0,0,1,21,21Z"></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search recipes"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-dropdown">
          <span className="filter-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#97A778" d="M3,6H21a1,1,0,0,1,.71,1.71l-7,7A1,1,0,0,1,13,14V10H11v4a1,1,0,0,1-.71.29,1,1,0,0,1-.71-.29l-7-7A1,1,0,0,1,3,6Z"></path>
            </svg>
          </span>
          <select value={filterType} onChange={e => setFilterType(e.target.value)} className="filter-select">
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Snack">Snack</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Main">Main</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
      </div>
      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <div key={recipe.name} className="recipe-card">
            <Link to={recipe.path}>
              <img src={recipe.img} alt={recipe.name} className="recipe-image" />
              <div className="recipe-name">{recipe.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;

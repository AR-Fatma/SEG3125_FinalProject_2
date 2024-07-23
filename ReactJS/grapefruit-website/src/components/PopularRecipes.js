import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import parfait from '../assets/parfait.jpg';
import toast from '../assets/toast.jpg';
import bananaBites from '../assets/banana-bites.jpg';
import springRolls from '../assets/spring-rolls.jpg';
import buddhaBowl from '../assets/buddha-bowl.jpg';
import '../App.css';

const PopularRecipes = () => {
  const recipes = [
    { name: 'Parfait', img: parfait, path: '/recipe/parfait', type: 'Dessert' },
    { name: 'Toast', img: toast, path: '/recipe/toast', type: 'Breakfast' },
    { name: 'Banana Bites', img: bananaBites, path: '/recipe/banana-bites', type: 'Snack' },
    { name: 'Spring Rolls', img: springRolls, path: '/recipe/spring-rolls', type: 'Appetizer' },
    { name: 'Buddha Bowl', img: buddhaBowl, path: '/recipe/buddha-bowl', type: 'Main' },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setTimeout(() => {
      const element = document.getElementById('recipe-detail');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="popular-recipes-container">
      <h1>Popular Recipes</h1>
      <p>To view recipes you can click on the picture.</p>
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <div key={recipe.name} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
            <img src={recipe.img} alt={recipe.name} className="recipe-image" />
            <div className="recipe-name">{recipe.name}</div>
          </div>
        ))}
      </div>
      {selectedRecipe && (
        <div id="recipe-detail" className="recipe-detail">
          <h1>{selectedRecipe.name}</h1>
          <img src={selectedRecipe.img} alt={selectedRecipe.name} className="recipe-detail-image" />
          <p>Type: {selectedRecipe.type}</p>
          <Link to={selectedRecipe.path} className="recipe-detail-link">View Full Recipe</Link>
        </div>
      )}
    </div>
  );
};

export default PopularRecipes;

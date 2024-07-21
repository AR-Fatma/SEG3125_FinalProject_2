// PopularRecipes.js
import React from 'react';
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
    { name: 'Parfait', img: parfait, path: '/recipe/parfait' },
    { name: 'Toast', img: toast, path: '/recipe/toast' },
    { name: 'Banana Bites', img: bananaBites, path: '/recipe/banana-bites' },
    { name: 'Spring Rolls', img: springRolls, path: '/recipe/spring-rolls' },
    { name: 'Buddha Bowl', img: buddhaBowl, path: '/recipe/buddha-bowl' },
    { name: 'Teriyaki Salmon Sushi Bowl', img: teriyakiSalmonSushiBowl, path: '/recipe/teriyaki-salmon-sushi-bowl' }
  ];

  return (
    <div className="popular-recipes-container">
      <h1>Popular Recipes</h1>
      <p>To view recipes you can click on the picture.</p>
      <div className="recipe-grid">
        {recipes.map(recipe => (
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

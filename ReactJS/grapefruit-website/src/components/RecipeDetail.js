import React from 'react';
import { useParams } from 'react-router-dom';
import parfait from '../assets/parfait.jpg';
import toast from '../assets/toast.jpg';
import bananaBites from '../assets/banana-bites.jpg';
import springRolls from '../assets/spring-rolls.jpg';
import buddhaBowl from '../assets/buddha-bowl.jpg';
import '../App.css';

const recipeData = {
  'parfait': {
    title: 'Parfait',
    image: parfait,
    description: 'Delicious and healthy parfait.',
    ingredients: [
      'Yogurt',
      'Granola',
      'Mixed Berries'
    ],
    instructions: [
      'Layer yogurt, granola, and berries in a glass.',
      'Repeat layers.',
      'Serve immediately.'
    ]
  },
  'toast': {
    title: 'Toast',
    image: toast,
    description: 'Simple and tasty toast.',
    ingredients: [
      'Bread',
      'Avocado',
      'Tomato'
    ],
    instructions: [
      'Toast the bread.',
      'Spread avocado on toast.',
      'Top with tomato slices.',
      'Serve immediately.'
    ]
  },
  'banana-bites': {
    title: 'Banana Bites',
    image: bananaBites,
    description: 'Delicious and easy to make chocolate peanut butter banana bites.',
    ingredients: [
      'Banana',
      'Peanut Butter',
      'Chocolate Chips'
    ],
    instructions: [
      'Slice banana.',
      'Spread peanut butter on banana slices.',
      'Top with chocolate chips.',
      'Serve immediately.'
    ]
  },
  'spring-rolls': {
    title: 'Spring Rolls',
    image: springRolls,
    description: 'Perfect summer fresh spring rolls.',
    ingredients: [
      'Rice paper wrappers',
      'Fresh vegetables (lettuce, carrots, cucumber, bell peppers)',
      'Shrimp or tofu',
      'Mint and basil leaves',
      'Rice noodles'
    ],
    instructions: [
      'Soak rice paper wrappers in warm water until soft.',
      'Fill with fresh vegetables, shrimp or tofu, mint and basil leaves, and rice noodles.',
      'Roll tightly and serve with dipping sauce.'
    ]
  },
  'buddha-bowl': {
    title: 'Buddha Bowl',
    image: buddhaBowl,
    description: 'Healthy and delicious Buddha bowl.',
    ingredients: [
      'Quinoa',
      'Chickpeas',
      'Avocado',
      'Mixed Vegetables'
    ],
    instructions: [
      'Cook quinoa according to package instructions.',
      'Roast chickpeas and vegetables.',
      'Assemble quinoa, chickpeas, and vegetables in a bowl.',
      'Top with avocado.',
      'Serve immediately.'
    ]
  },
}
const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = recipeData[recipeId];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;

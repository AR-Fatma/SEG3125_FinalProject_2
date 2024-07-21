import React from 'react';
import { useParams } from 'react-router-dom';

const recipeData = {
  1: {
    title: "50+ Best Pregnancy Foods to Eat",
    image: "/assets/50+ Best Pregnancy Foods to Eat (ultimate pregnancy diet guide).jpg",
    description: "Ultimate pregnancy diet guide.",
  },
  2: {
    title: "Aesthetic Breakfast Idea",
    image: "/assets/aesthetic breakfast idea!!.jpg",
    description: "Healthy and beautiful breakfast ideas.",
  },
  3: {
    title: "Chocolate Peanut Butter Banana Bites",
    image: "/assets/Chocolate Peanut Butter Banana Bites.jpg",
    description: "Delicious and easy to make chocolate peanut butter banana bites.",
  },
  4: {
    title: "Fresh Spring Rolls",
    image: "/assets/Fresh Spring Rolls Perfect for Summer | Delicious & Easy to Make.jpg",
    description: "Perfect summer fresh spring rolls.",
  },
  5: {
    title: "Unknown Recipe 5",
    image: "/assets/Unknown-5.jpg",
    description: "Description of unknown recipe 5.",
  }
};

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} style={{ width: '100%', marginBottom: '20px' }} />
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;

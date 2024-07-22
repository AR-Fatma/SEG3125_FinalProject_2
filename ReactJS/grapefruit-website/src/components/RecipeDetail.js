import React from 'react';
import { useParams } from 'react-router-dom';

const recipeData = {
  1: {
    title: "Parfait",
    image: "/assets/parfait.jpg",
    description: "A delicious parfait.",
    ingredients: ["Yogurt", "Granola", "Berries"],
    instructions: ["Layer yogurt, granola, and berries.", "Serve immediately."]
  },
  2: {
    title: "Toast",
    image: "/assets/toast.jpg",
    description: "Healthy toast options.",
    ingredients: ["Bread", "Avocado", "Egg"],
    instructions: ["Toast the bread.", "Top with avocado and egg."]
  },
  3: {
    title: "Banana Bites",
    image: "/assets/banana-bites.jpg",
    description: "Chocolate Peanut Butter Banana Bites.",
    ingredients: ["Bananas", "Chocolate", "Peanut Butter"],
    instructions: ["Slice bananas.", "Spread peanut butter.", "Dip in chocolate."]
  },
  4: {
    title: "Spring Rolls",
    image: "/assets/spring-rolls.jpg",
    description: "Fresh Spring Rolls.",
    ingredients: ["Rice paper wrappers", "Vegetables", "Shrimp or tofu"],
    instructions: ["Soak rice paper.", "Fill with vegetables and shrimp/tofu.", "Roll tightly and serve."]
  },
  5: {
    title: "Buddha Bowl",
    image: "/assets/buddha-bowl.jpg",
    description: "A nutritious Buddha Bowl.",
    ingredients: ["Quinoa", "Chickpeas", "Vegetables"],
    instructions: ["Cook quinoa.", "Mix with chickpeas and vegetables.", "Serve with dressing."]
  },
  6: {
    title: "Teriyaki Salmon Sushi Bowl",
    image: "/assets/teriyaki-salmon-sushi-bowl.jpg",
    description: "Teriyaki Salmon Sushi Bowl.",
    ingredients: ["Salmon", "Rice", "Vegetables"],
    instructions: ["Cook salmon with teriyaki sauce.", "Serve over rice with vegetables."]
  }
};

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;

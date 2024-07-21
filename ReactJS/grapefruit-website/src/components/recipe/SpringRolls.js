// SpringRolls.js
import React from 'react';
import springRolls from '../../assets/spring-rolls.jpg';
import '../../App.css';

const SpringRolls = () => {
  return (
    <div className="recipe-container">
      <img src={springRolls} alt="Spring Rolls" className="recipe-detail-image" />
      <div className="recipe-detail">
        <h1>Spring Rolls</h1>
        <h3>Ingredients:</h3>
        <ul>
          <li>Rice paper wrappers</li>
          <li>Fresh vegetables (lettuce, carrots, cucumber, bell peppers)</li>
          <li>Shrimp or tofu</li>
          <li>Mint and basil leaves</li>
          <li>Rice noodles</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Soak rice paper wrappers in warm water until soft.</li>
          <li>Fill with fresh vegetables, shrimp or tofu, mint and basil leaves, and rice noodles.</li>
          <li>Roll tightly and serve with dipping sauce.</li>
        </ol>
      </div>
    </div>
  );
};

export default SpringRolls;

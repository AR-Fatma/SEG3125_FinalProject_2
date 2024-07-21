// BuddhaBowl.js
import React from 'react';
import buddhaBowl from '../../assets/buddha-bowl.jpg';
import '../../App.css';

const BuddhaBowl = () => {
  return (
    <div className="recipe-container">
      <img src={buddhaBowl} alt="Buddha Bowl" className="recipe-detail-image" />
      <div className="recipe-detail">
        <h1>Buddha Bowl</h1>
        <h3>Ingredients:</h3>
        <ul>
          <li>Quinoa</li>
          <li>Chickpeas</li>
          <li>Sweet potatoes</li>
          <li>Spinach</li>
          <li>Avocado</li>
          <li>Hummus</li>
          <li>Lemon tahini dressing</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Cook quinoa and roasted sweet potatoes.</li>
          <li>Assemble all ingredients in a bowl.</li>
          <li>Drizzle with lemon tahini dressing.</li>
          <li>Serve immediately and enjoy!</li>
        </ol>
      </div>
    </div>
  );
};

export default BuddhaBowl;

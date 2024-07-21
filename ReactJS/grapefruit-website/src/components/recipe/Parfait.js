// Parfait.js
import React from 'react';
import parfait from '../../assets/parfait.jpg';
import '../../App.css';

const Parfait = () => {
  return (
    <div className="recipe-container">
      <img src={parfait} alt="Parfait" className="recipe-detail-image" />
      <div className="recipe-detail">
        <h1>Parfait</h1>
        <h3>Ingredients:</h3>
        <ul>
          <li>Greek yogurt</li>
          <li>Granola</li>
          <li>Mixed berries</li>
          <li>Honey</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Layer Greek yogurt, granola, and mixed berries in a glass.</li>
          <li>Drizzle with honey.</li>
          <li>Serve immediately and enjoy!</li>
        </ol>
      </div>
    </div>
  );
};

export default Parfait;

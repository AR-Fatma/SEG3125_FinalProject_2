// Toast.js
import React from 'react';
import toast from '../../assets/toast.jpg';
import '../../App.css';

const Toast = () => {
  return (
    <div className="recipe-container">
      <img src={toast} alt="Toast" className="recipe-detail-image" />
      <div className="recipe-detail">
        <h1>Toast</h1>
        <h3>Enjoy these delicious and healthy toasts for breakfast or as a snack.</h3>
        <h3>Ingredients:</h3>
        <ul>
          <li>Whole grain bread</li>
          <li>Avocado</li>
          <li>Banana</li>
          <li>Raspberries</li>
          <li>Peanut butter</li>
          <li>Granola</li>
          <li>Blueberries</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Toast the bread slices.</li>
          <li>Top with avocado, banana, raspberries, peanut butter, granola, and blueberries as desired.</li>
          <li>Serve immediately and enjoy!</li>
        </ol>
      </div>
    </div>
  );
};

export default Toast;

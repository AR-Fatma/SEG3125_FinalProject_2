// TeriyakiSalmonSushiBowl.js
import React from 'react';
import teriyakiSalmonSushiBowl from '../../assets/teriyaki-salmon-sushi-bowl.jpg';
import '../../App.css';

const TeriyakiSalmonSushiBowl = () => {
  return (
    <div className="recipe-container">
      <img src={teriyakiSalmonSushiBowl} alt="Teriyaki Salmon Sushi Bowl" className="recipe-detail-image" />
      <div className="recipe-detail">
        <h1>Teriyaki Salmon Sushi Bowl</h1>
        <h3>Ingredients:</h3>
        <ul>
          <li>Salmon fillets</li>
          <li>Teriyaki sauce</li>
          <li>Cooked rice</li>
          <li>Avocado</li>
          <li>Edamame</li>
          <li>Sesame seeds</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Marinate salmon in teriyaki sauce.</li>
          <li>Cook salmon and slice into pieces.</li>
          <li>Assemble cooked rice, avocado, edamame, and salmon in a bowl.</li>
          <li>Sprinkle with sesame seeds and serve immediately.</li>
        </ol>
      </div>
    </div>
  );
};

export default TeriyakiSalmonSushiBowl;

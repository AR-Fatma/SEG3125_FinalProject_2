// BananaBites.js
import React from 'react';
import bananaBites from '../../assets/banana-bites.jpg';
import '../../App.css';

const BananaBites = () => {
  return (
    <div className="recipe-container">
      <img src={bananaBites} alt="Banana Bites" className="recipe-detail-image" />
      <div className="recipe-detail">
        <h1>Banana Bites</h1>
        <h3>Ingredients:</h3>
        <ul>
          <li>Bananas</li>
          <li>Peanut butter</li>
          <li>Dark chocolate</li>
        </ul>
        <h3>Instructions:</h3>
        <ol>
          <li>Slice bananas into bite-sized pieces.</li>
          <li>Spread peanut butter on each slice.</li>
          <li>Dip in melted dark chocolate.</li>
          <li>Freeze for 15 minutes before serving.</li>
        </ol>
      </div>
    </div>
  );
};

export default BananaBites;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import HealthCoaches from './components/HealthCoaches';
import PopularRecipes from './components/PopularRecipes';
import UpcomingClasses from './components/UpcomingClasses';
import Booking from './components/Booking';
import ContactUs from './components/ContactUs';
import Parfait from './components/recipe/Parfait';
import Toast from './components/recipe/Toast';
import BananaBites from './components/recipe/BananaBites';
import SpringRolls from './components/recipe/SpringRolls';
import BuddhaBowl from './components/recipe/BuddhaBowl';
import TeriyakiSalmonSushiBowl from './components/recipe/TeriyakiSalmonSushiBowl';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health-coaches" element={<HealthCoaches />} />
        <Route path="/popular-recipes" element={<PopularRecipes />} />
        <Route path="/upcoming-classes" element={<UpcomingClasses />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/recipe/parfait" element={<Parfait />} />
        <Route path="/recipe/toast" element={<Toast />} />
        <Route path="/recipe/banana-bites" element={<BananaBites />} />
        <Route path="/recipe/spring-rolls" element={<SpringRolls />} />
        <Route path="/recipe/buddha-bowl" element={<BuddhaBowl />} />
        <Route path="/recipe/teriyaki-salmon-sushi-bowl" element={<TeriyakiSalmonSushiBowl />} />
      </Routes>
    </Router>
  );
}

export default App;

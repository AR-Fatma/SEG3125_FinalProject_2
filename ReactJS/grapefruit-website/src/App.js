import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import HealthCoaches from './components/HealthCoaches';
import PopularRecipes from './components/PopularRecipes';
import Classes from './components/Classes';
import Parfait from './components/recipe/Parfait';
import Toast from './components/recipe/Toast';
import BananaBites from './components/recipe/BananaBites';
import SpringRolls from './components/recipe/SpringRolls';
import BuddhaBowl from './components/recipe/BuddhaBowl';
import TeriyakiSalmonSushiBowl from './components/recipe/TeriyakiSalmonSushiBowl';
import SearchResults from './components/SearchResults';
import Booking from './components/Booking';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <section id="home">
          <Home />
        </section>
        <section id="health-coaches">
          <HealthCoaches />
        </section>
        <section id="popular-recipes">
          <PopularRecipes />
        </section>
        <section id="classes">
          <Classes />
        </section>
        <section id="booking">
          <Booking />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health-coaches" element={<HealthCoaches />} />
        <Route path="/popular-recipes" element={<PopularRecipes />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/recipe/parfait" element={<Parfait />} />
        <Route path="/recipe/toast" element={<Toast />} />
        <Route path="/recipe/banana-bites" element={<BananaBites />} />
        <Route path="/recipe/spring-rolls" element={<SpringRolls />} />
        <Route path="/recipe/buddha-bowl" element={<BuddhaBowl />} />
        <Route path="/recipe/teriyaki-salmon-sushi-bowl" element={<TeriyakiSalmonSushiBowl />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import '../App.css';

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help</h1>
      <section>
        <h2>Getting Started</h2>
        <p>Welcome to Grapefruit Health and Wellness! Here's a quick guide to help you get started:</p>
        <ul>
          <li>Navigate through the site using the menu at the top.</li>
          <li>Search for specific content using the search bar.</li>
          <li>Click on recipes, coaches, or classes to view more details.</li>
        </ul>
      </section>
      <section>
        <h2>Navigation</h2>
        <p>Use the following links to quickly navigate to different sections of the site:</p>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#health-coaches">Health Coaches</a></li>
          <li><a href="#popular-recipes">Popular Recipes</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </section>
      <section>
        <h2>FAQ</h2>
        <p>Here are some frequently asked questions:</p>
        <ul>
          <li><strong>How do I book a session with a health coach?</strong> Navigate to the Booking section and fill out the form.</li>
          <li><strong>How can I view more details about a recipe?</strong> Click on any recipe in the Popular Recipes section to see the full details.</li>
          <li><strong>Is there a way to filter recipes or classes?</strong> Use the search bar at the top to find specific content.</li>
        </ul>
      </section>
      <section>
        <h2>Contact Support</h2>
        <p>If you need further assistance, please contact us through the <a href="#contact-us">Contact Us</a> page.</p>
      </section>
    </div>
  );
};

export default Help;

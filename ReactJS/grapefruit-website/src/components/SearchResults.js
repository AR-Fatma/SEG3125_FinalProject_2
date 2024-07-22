import React from 'react';
import { useParams } from 'react-router-dom';

const dataset = [
  { name: 'Parfait', type: 'recipe', description: 'A healthy and delicious parfait recipe.' },
  { name: 'Toast', type: 'recipe', description: 'A simple and tasty toast recipe.' },
  { name: 'Banana Bites', type: 'recipe', description: 'A quick and easy banana bites recipe.' },
  { name: 'Spring Rolls', type: 'recipe', description: 'Fresh and crunchy spring rolls recipe.' },
  { name: 'Buddha Bowl', type: 'recipe', description: 'A nourishing Buddha bowl recipe.' },
  { name: 'Teriyaki Salmon Sushi Bowl', type: 'recipe', description: 'A flavorful sushi bowl recipe.' },
  { name: 'Emily Johnson', type: 'health coach', description: 'Certified Fitness Trainer.' },
  { name: 'Sarah Lee', type: 'health coach', description: 'Wellness Coach.' },
  { name: 'John Doe', type: 'health coach', description: 'Yoga Instructor.' },
  { name: 'Mindfulness and Stress Management', type: 'class', description: 'Techniques and practices to manage stress.' },
  { name: 'Strength Training 101', type: 'class', description: 'A beginner\'s guide to strength training.' },
  { name: 'Nutrition for Weight Loss', type: 'class', description: 'Create a balanced diet plan for weight loss.' },
  { name: 'Yoga for Beginners', type: 'class', description: 'Learn the basics of yoga.' },
  { name: 'Advanced Pilates', type: 'class', description: 'Advanced Pilates techniques for fitness.' },
];

const SearchResults = () => {
  const { searchTerm } = useParams();
  const searchResults = dataset.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        searchResults.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>No results found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchResults;

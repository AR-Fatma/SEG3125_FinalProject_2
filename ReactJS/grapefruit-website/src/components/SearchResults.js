import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dataset = [
  { name: 'Parfait', type: 'recipe', path: '/popular-recipes' },
  { name: 'Toast', type: 'recipe', path: '/popular-recipes' },
  { name: 'Banana Bites', type: 'recipe', path: '/popular-recipes' },
  { name: 'Spring Rolls', type: 'recipe', path: '/popular-recipes' },
  { name: 'Buddha Bowl', type: 'recipe', path: '/popular-recipes' },
  { name: 'Teriyaki Salmon Sushi Bowl', type: 'recipe', path: '/popular-recipes' },
  { name: 'Emily Johnson', type: 'health coach', path: '/health-coaches' },
  { name: 'Sarah Lee', type: 'health coach', path: '/health-coaches' },
  { name: 'John Doe', type: 'health coach', path: '/health-coaches' },
  { name: 'Mindfulness and Stress Management', type: 'class', path: '/classes' },
  { name: 'Strength Training 101', type: 'class', path: '/classes' },
  { name: 'Nutrition for Weight Loss', type: 'class', path: '/classes' },
  { name: 'Yoga for Beginners', type: 'class', path: '/classes' },
  { name: 'Advanced Pilates', type: 'class', path: '/classes' },
];

const SearchResults = () => {
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) {
      navigate('/');
      return;
    }

    const searchResults = dataset.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchResults.length > 0) {
      const item = searchResults[0];
      navigate(item.path);
    } else {
      navigate('/'); // Navigate to home page if no results found
    }
  }, [searchTerm, navigate]);

  return null; // Do not render anything
};

export default SearchResults;

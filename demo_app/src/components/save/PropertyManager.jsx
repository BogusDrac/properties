import { useState, useEffect } from 'react';

/**
 * Custom hook to manage localStorage state
 * @param {string} key - localStorage key
 * @param {any} initialValue - default value if nothing in localStorage
 * @returns {[any, Function]} - state and setter function
 */
const useLocalStorage = (key, initialValue = []) => {
  // Initialize state from localStorage or use initialValue
  const [state, setState] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  // Update localStorage whenever state changes
  const setStateAndStorage = (newValue) => {
    const valueToStore = newValue instanceof Function ? newValue(state) : newValue;
    setState(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [state, setStateAndStorage];
};

const PropertyManager = () => {
  // State management with custom hook
  const [order, setOrder] = useLocalStorage('orderProperties', []);
  const [favorites, setFavorites] = useLocalStorage('propertyFavorites', []);
  const [selectedFilters, setSelectedFilters] = useState({});

  // Toggle item in array helper
  const toggleItem = (array, itemId) => {
    return array.includes(itemId) 
      ? array.filter(id => id !== itemId)
      : [...array, itemId];
  };

  // Handler functions
  const toggleOrder = (propertyId) => {
    setOrder(prevOrder => toggleItem(prevOrder, propertyId));
  };

  const toggleFavorite = (propertyId) => {
    setFavorites(prevFavorites => toggleItem(prevFavorites, propertyId));
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search filters:', selectedFilters);
  };

  return {
    order,
    favorites,
    selectedFilters,
    toggleOrder,
    toggleFavorite,
    handleFilterChange,
    handleSubmit
  };
};

export default PropertyManager;
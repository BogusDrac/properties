// PropertyFilters.js
/**
 * Utility component for filtering property listings based on selected criteria
 * Handles both rental and purchase properties with different price ranges
 */

const PropertyFilters = {
    /**
     * Main filter function that processes properties based on selected filters
     * @param {Array} properties - Array of property objects to filter
     * @param {Object} selectedFilters - Object containing filter criteria
     * @param {string} activeTab - Current active tab ('buy' or 'rent')
     * @returns {Array} Filtered array of properties
     */
    filterProperties: (properties, selectedFilters, activeTab) => {
      return properties.filter(property => {
        // Combine all filter conditions
        return (
          PropertyFilters.filterBasicInfo(property, selectedFilters) &&
          PropertyFilters.filterRooms(property, selectedFilters) &&
          PropertyFilters.filterSize(property, selectedFilters) &&
          PropertyFilters.filterPrice(property, selectedFilters, activeTab)
        );
      });
    },
  
    /**
     * Filter basic property information (type and location)
     */
    filterBasicInfo: (property, filters) => {
      return (
        (filters.type === 'all' || property.type === filters.type) &&
        (filters.location === 'all' || 
         property.location.toLowerCase() === filters.location.toLowerCase())
      );
    },
  
    /**
     * Filter property rooms (bedrooms, bathrooms, garages)
     */
    filterRooms: (property, filters) => {
      // Handle bedroom filtering
      const bedroomMatch = filters.bedrooms === 'all' || 
        (filters.bedrooms === '4+' ? 
          property.bedrooms >= 4 : 
          property.bedrooms === parseInt(filters.bedrooms));
  
      // Handle bathroom filtering
      const bathroomMatch = filters.bathrooms === 'all' || 
        (filters.bathrooms === '4+' ? 
          property.bathrooms >= 4 : 
          property.bathrooms === parseInt(filters.bathrooms));
  
      // Handle garage filtering
      const garageMatch = filters.garages === 'all' || 
        (filters.garages === 'none' ? property.garages === 0 : 
         filters.garages === '3+' ? property.garages >= 3 : 
         property.garages === parseInt(filters.garages));
  
      return bedroomMatch && bathroomMatch && garageMatch;
    },
  
    /**
     * Filter property by size category
     */
    filterSize: (property, filters) => {
      if (filters.propertySize === 'all') return true;
  
      const size = parseFloat(property.size);
      const sizeRanges = {
        'small': size < 100,
        'medium': size >= 100 && size <= 200,
        'large': size > 200 && size <= 300,
        'xlarge': size > 300
      };
  
      return sizeRanges[filters.propertySize];
    },
  
    /**
     * Filter property by price range, handling both purchase and rental prices
     */
    filterPrice: (property, filters, activeTab) => {
      if (filters.priceRange === 'all') return true;
  
      const price = parseFloat(property.price.replace(/[^0-9.]/g, ''));
      
      // Different price ranges for buy vs rent
      const priceRanges = {
        buy: {
          '1st': price >= 600000 && price <= 800000,
          '2nd': price > 800000 && price <= 1000000,
          '3rd': price > 1000000 && price <= 2000000,
          '4th': price > 2000000
        },
        rent: {
          '1st': price >= 2000 && price <= 4000,
          '2nd': price > 4000 && price <= 8000,
          '3rd': price > 8000 && price <= 10000,
          '4th': price > 5000
        }
      };
  
      return priceRanges[activeTab][filters.priceRange];
    }
  };
  
  export default PropertyFilters;
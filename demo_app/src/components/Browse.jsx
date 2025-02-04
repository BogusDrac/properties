import { useState, useEffect } from 'react';
import { Heart, BedDouble, Bath, Car, Maximize } from "lucide-react";
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { order, favorites, toggleFavorite, toggleOrder, toggleItem } from './save/PropertyManager';


const Browse = ({ properties }) => {
  
  const [showMoreBuy, setShowMoreBuy] = useState(false);
  const [showMoreRent, setShowMoreRent] = useState(false);

  const buyProperties = showMoreBuy ? properties.buy : properties.buy.slice(0, 4);
  const rentProperties = showMoreRent ? properties.rent : properties.rent.slice(0, 4);

return (
  <div className="p-6 mt-0 md:mt-0 sm:mt-[-40px] dark:bg-orange-950">
    
    {/* Buy Properties Section */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Buy Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl 
              transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => toggleFavorite(property.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 
                  dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 
                  transition-all duration-300"
              >
                <Heart 
                  className={`w-5 h-5 ${
                    favorites.includes(property.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold dark:text-white">
                  {property.title}
                </h3>
                <p className="text-orange-600 dark:text-white font-bold">{property.price}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {property.location}
              </p>

              <div className="grid grid-cols-5 gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Car className="w-4 h-4" />
                  <span>{property.garages}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Maximize className="w-4 h-4" />
                  <span>{property.size}</span>
                </div>
                <div className="flex items-center gap-1 pl-6">
                  <Link to="/order">
                    <button
                      onClick={() => toggleOrder(property.id)}
                      className='animate-bounce transition-colors'>
                      <BiCart className="hover:scale-150 text-green-600 font-bold scale-125 transition-all duration-200 dark:hover:text-white transform hover:text-black w-5 h-5 dark:text-green-400" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {properties.buy.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMoreBuy(!showMoreBuy)}
            className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg 
              hover:bg-orange-700 transition-all duration-300"
          >
            {showMoreBuy ? "Show Less Buy" : "Show More Buy"}
          </button>
        </div>
      )}
    </div>

    {/* Rent Properties Section */}
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Rent Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl 
              transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => toggleFavorite(property.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 
                  dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 
                  transition-all duration-300"
              >
                <Heart 
                  className={`w-5 h-5 ${
                    favorites.includes(property.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold dark:text-white">
                  {property.title}
                </h3>
                <p className="text-orange-600 dark:text-white font-bold">{property.price}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {property.location}
              </p>

              <div className="grid grid-cols-5 gap-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Car className="w-4 h-4" />
                  <span>{property.garages}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Maximize className="w-4 h-4" />
                  <span>{property.size}</span>
                </div>
                <div className="flex items-center gap-1 pl-6">
                  <Link to="/order">
                    <button
                      onClick={() => toggleOrder(property.id)}
                      className='animate-bounce transition-colors'>
                      <BiCart className="hover:scale-150 text-green-600 font-bold scale-125 transition-all duration-200 dark:hover:text-white transform hover:text-black w-5 h-5 dark:text-green-400" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {properties.rent.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMoreRent(!showMoreRent)}
            className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg 
              hover:bg-orange-700 transition-all duration-300"
          >
            {showMoreRent ? "Show Less Rent" : "Show More Rent"}
          </button>
        </div>
      )}
    </div>
  </div>
)};

export default Browse;
import { useState, useEffect } from 'react';
import { Heart, BedDouble, Bath, Car, Maximize } from "lucide-react";
import { BiCart } from 'react-icons/bi';
import { Link } from 'react-router-dom';



/* images */
import img1 from "../assets/images/rdp1.jpg";
import img2 from "../assets/images/rdp2.jpg";
import img3 from "../assets/images/rdp3.jpg";
import img4 from "../assets/images/rdp4.jpg";
import img5 from "../assets/images/rdp5.jpg";
import img6 from "../assets/images/rdp6.jpg";
import img7 from "../assets/images/rdp7.jpg";
import img8 from "../assets/images/rdp8.jpg";
import img9 from "../assets/images/rdp9.jpg";
import img10 from "../assets/images/rdp10.jpg";
import img11 from "../assets/images/rdp11.jpg";


const properties = {
  buy: [
    {
      id: 1,
      title: "Modern Villa",
      location: "Dunusa",
      price: "R2,500,000",
      type: "villas",
      bedrooms: 4,
      bathrooms: 3,
      garages: 2,
      size: "350m²",
      image: img1,
    },
    {
      id: 2,
      title: "Luxury Apartment",
      location: "Makuleni",
      price: "R1,800,000",
      type: "apartments",
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      size: "120m²",
      image: img2,
    },
    {
      id: 3,
      title: "Family Home",
      location: "Loliwe",
      price: "R2,000,000",
      type: "houses",
      bedrooms: 4,
      bathrooms: 3,
      garages: 2,
      size: "250m²",
      image: img3,
    },
    {
      id: 4,
      title: "Villa",
      location: "Emagesini",
      price: "R3,500,000",
      type: "villas",
      bedrooms: 2,
      bathrooms: 2,
      garages: 1,
      size: "200m²",
      image: img4,
    },
    {
      id: 5,
      title: "Estate",
      location: "Makuleni",
      price: "R4,500,000",
      type: "estates",
      bedrooms: 5,
      bathrooms: 4,
      garages: 1,
      size: "500m²",
      image: img5,
    },
  ],

  rent: [
    {
      id: 6,
      title: "Cozy House",
      location: "Loliwe",
      price: "R15,000/month",
      type: "houses",
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      size: "200m²",
      image: img6,
    },
    {
      id: 7,
      title: "Studio Apartment",
      location: "Emagesini",
      price: "R8,000/month",
      type: "apartments",
      bedrooms: 1,
      bathrooms: 1,
      garages: 1,
      size: "45m²",
      image: img7,
    },
    {
      id: 8,
      title: "PentHouse",
      location: "Loliwe",
      price: "R25,000/month",
      type: "penthouses",
      bedrooms: 3,
      bathrooms: 3,
      garages: 2,
      size: "180m²",
      image: img8,
    },
    {
      id: 9,
      title: "Apartment",
      location: "Emagesini",
      price: "R13,000/month",
      type: "apartments",
      bedrooms: 2,
      bathrooms: 2,
      garages: 1,
      size: "120m²",
      image: img9,
    },
    {
      id: 10,
      title: "Estate",
      location: "Makuleni",
      price: "R10,500/month",
      type: "estates",
      bedrooms: 3,
      bathrooms: 2,
      garages: 1,
      size: "140m²",
      image: img10,
    },
    {
      id: 11,
      title: "Condo",
      location: "Emagesini",
      price: "R30,500/month",
      type: "estates",
      bedrooms: 4,
      bathrooms: 2,
      garages: 2,
      size: "400m²",
      image: img11,
    },
  ],
};

const Browse = () => {
  
  // order and favorites to localstorage
  const [order, setOrder] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const loadFromLocalStorage = (key, setState) => {
    const data = localStorage.getItem(key);
      if (data) {
      setState(JSON.parse(data));
    }
  };

  useEffect(() => {
    loadFromLocalStorage('orderProperties', setOrder);
    loadFromLocalStorage('propertyFavorites', setFavorites);
  }, []);

  const toggleItem = (key, state, setState, propertyId) => {
    setState(prevState => {
      const newState = prevState.includes(propertyId)
        ? prevState.filter(id => id !== propertyId)
        : [...prevState, propertyId];

      localStorage.setItem(key, JSON.stringify(newState));
      return newState;
    });
  };

  const toggleOrder = (propertyId) => toggleItem('orderProperties', order, setOrder, propertyId);
  const toggleFavorite = (propertyId) => toggleItem('propertyFavorites', favorites, setFavorites, propertyId);
  //end


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
                      <BiCart className="hover:scale-150 transition-all duration-200 dark:hover:text-white transform hover:text-black w-5 h-5" />
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
                      <BiCart className="hover:scale-150 transition-all duration-200 dark:hover:text-white transform hover:text-black w-5 h-5" />
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
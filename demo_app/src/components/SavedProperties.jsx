import { useState, useEffect } from 'react';
import { Heart, BedDouble, Bath, Car, Maximize } from "lucide-react";
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';

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
    }
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
      type: "apartment",
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
  ]
};

const SavedProperties = () => {
  const [favorites, setFavorites] = useState([]);
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('propertyFavorites');
    if (savedFavorites) {
      const favoriteIds = JSON.parse(savedFavorites);
      setFavorites(favoriteIds);
      
      // Filter all properties to get only the favorited ones
      const allProperties = [...properties.buy, ...properties.rent];
      const favoritedProperties = allProperties.filter(property => 
        favoriteIds.includes(property.id)
      );
      setSavedProperties(favoritedProperties);
    }
  }, []);

  // Toggle favorite status for a property
  const toggleFavorite = (propertyId) => {
    setFavorites((prevFavorites) => {
      let newFavorites = [...prevFavorites];

      if (newFavorites.includes(propertyId)) {
        newFavorites = newFavorites.filter((id) => id !== propertyId);
        // Remove from saved properties
        setSavedProperties(prev => prev.filter(property => property.id !== propertyId));
      } else {
        newFavorites.push(propertyId);
        // Add to saved properties
        const allProperties = [...properties.buy, ...properties.rent];
        const newSavedProperty = allProperties.find(property => property.id === propertyId);
        setSavedProperties(prev => [...prev, newSavedProperty]);
      }

      // Update localStorage
      localStorage.setItem('propertyFavorites', JSON.stringify(newFavorites));
      
      return newFavorites;
    });
  };


  /* order */
  const [order, setOrder] = useState([])

  // load order to local storage on component mount
  useEffect(() => {
    const orderProperties = localStorage.getItem('orderProperties');
    if (orderProperties) {
      setOrder(JSON.parse(orderProperties));
    }
  }, [])

  // Toggle order status for a property
  const toggleOrder = (protertyId) => {
    setOrder(prevOrder => {
      const newOrder = prevOrder.includes(protertyId)
      ? newOrder.filter(id => id !== protertyId)
      : [ ...prevOrder, protertyId ];

      localStorage.setItem('orderProperties', JSON.stringify(newOrder));
      return newOrder;
    });
  };

  return (
    <div className="p-6 dark:bg-orange-950 pb-44 mt-[-12px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold dark:text-white">Saved Properties</h2>
        <p className="text-gray-600 dark:text-gray-300">
          {savedProperties.length} {savedProperties.length === 1 ? 'property' : 'properties'} saved
        </p>
      </div>

      {savedProperties.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold dark:text-white mb-2">
            No saved properties yet
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Start saving properties by clicking the heart icon on properties you're interested in
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProperties.map((property) => (
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
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
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
                  <Link 
                    className=""
                    to="/order">
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
      )}
    </div>
  );
};

export default SavedProperties;

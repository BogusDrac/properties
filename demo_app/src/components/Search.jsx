import { useEffect, useState } from 'react';
import { Search as SearchIcon, BedDouble, Bath, Car, Maximize, Heart } from 'lucide-react';
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




// property data
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




const Search = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    location: 'all',
    garages: 'all',
    priceRange: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    propertySize: 'all'
  });
  
  


const [order, setOrder] = useState([]);
const [favorites, setFavorites] = useState([]);

// Load saved data on component mount
useEffect(() => {
 const orderProperties = localStorage.getItem('orderProperties');
 const savedFavorites = localStorage.getItem('propertyFavorites');
 
 if (orderProperties) setOrder(JSON.parse(orderProperties));
 if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
}, []);

const handleFilterChange = (filterType, value) => {
 setSelectedFilters(prev => ({
   ...prev,
   [filterType]: value
 }));
};

const handleSubmit = (e) => {
 e.preventDefault();
 console.log('Search filters:', selectedFilters);
};

const toggleOrder = (propertyId) => {
 setOrder(prevOrder => {
   const newOrder = prevOrder.includes(propertyId)
     ? prevOrder.filter(id => id !== propertyId)
     : [...prevOrder, propertyId];
   
   localStorage.setItem('orderProperties', JSON.stringify(newOrder));
   return newOrder;
 });
};

const toggleFavorite = (propertyId) => {
 setFavorites(prevFavorites => {
   const newFavorites = prevFavorites.includes(propertyId)
     ? prevFavorites.filter(id => id !== propertyId)
     : [...prevFavorites, propertyId];
   
   localStorage.setItem('propertyFavorites', JSON.stringify(newFavorites));
   return newFavorites;
 });
};



  //Filter properties based on selected filters
  const filterProperties = (properties) => {
    return properties.filter(property => {
      return (
        (selectedFilters.type === 'all' || property.type === selectedFilters.type) &&
        (selectedFilters.location === 'all' || property.location.toLowerCase() === selectedFilters.location.toLowerCase()) &&
        (selectedFilters.bedrooms === 'all' || 
          (selectedFilters.bedrooms === '4+' ? property.bedrooms >= 4 : property.bedrooms === parseInt(selectedFilters.bedrooms))) &&
        (selectedFilters.bathrooms === 'all' || 
          (selectedFilters.bathrooms === '4+' ? property.bathrooms >= 4 : property.bathrooms === parseInt(selectedFilters.bathrooms))) &&
        (selectedFilters.garages === 'all' || 
          (selectedFilters.garages === 'none' ? property.garages === 0 : 
          (selectedFilters.garages === '3+' ? property.garages >= 3 : property.garages === parseInt(selectedFilters.garages)))) &&
        (selectedFilters.propertySize === 'all' || 
          (selectedFilters.propertySize === 'small' ? parseFloat(property.size) < 100 :
          (selectedFilters.propertySize === 'medium' ? parseFloat(property.size) >= 100 && parseFloat(property.size) <= 200 :
          (selectedFilters.propertySize === 'large' ? parseFloat(property.size) > 200 && parseFloat(property.size) <= 300 :
          (selectedFilters.propertySize === 'xlarge' ? parseFloat(property.size) > 300 : true))))) &&
        (selectedFilters.priceRange === 'all' || 
          (activeTab === 'buy' ? 
            (selectedFilters.priceRange === '1st' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) >= 200000 && parseFloat(property.price.replace(/[^0-9.]/g, '')) <= 400000 :
            (selectedFilters.priceRange === '2nd' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) > 400000 && parseFloat(property.price.replace(/[^0-9.]/g, '')) <= 600000 :
            (selectedFilters.priceRange === '3rd' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) > 600000 && parseFloat(property.price.replace(/[^0-9.]/g, '')) <= 800000 :
            (selectedFilters.priceRange === '4th' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) > 800000 : true)))) :
            (selectedFilters.priceRange === '1st' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) >= 2000 && parseFloat(property.price.replace(/[^0-9.]/g, '')) <= 3000 :
            (selectedFilters.priceRange === '2nd' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) > 3000 && parseFloat(property.price.replace(/[^0-9.]/g, '')) <= 4000 :
            (selectedFilters.priceRange === '3rd' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) > 4000 && parseFloat(property.price.replace(/[^0-9.]/g, '')) <= 5000 :
            (selectedFilters.priceRange === '4th' ? parseFloat(property.price.replace(/[^0-9.]/g, '')) > 5000 : true))))))
      );
    });
  };





  const PropertyCard = ({ property }) => (
    <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl 
      transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
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
          <h3 className="text-lg font-semibold dark:text-white">{property.title}</h3>
          <p className="text-orange-600 dark:text-white font-bold">{property.price}</p>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{property.location}</p>
        
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
  );

  return (
    <div className="w-full min-h-[calc(100vh-8rem)] dark:bg-orange-900 
      pt-16 sm:pt-20">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Main Content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
          py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col items-center justify-start text-center">
            {/* Hero Text */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">
                Find Your Dream Property
              </h1>
              <p className="text-base sm:text-xl text-gray-200 max-w-2xl px-4">
                Browse properties for sale and rent across Villa Liza
              </p>
            </div>

            {/* Search Container */}
            <div className="w-full max-w-4xl">
              {/* Tabs */}
              <div className="flex justify-center mb-6 sm:mb-8 gap-3 sm:gap-4 px-4">
                {['buy', 'rent'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg 
                      font-semibold transition-all duration-300 flex-1 sm:flex-none 
                      max-w-[160px]
                      ${activeTab === tab 
                        ? 'bg-gray-600 dark:bg-orange-600 text-white shadow-lg scale-105' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }
                    `}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Search Form */}
              <form 
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 
                  shadow-2xl mx-4 mb-12"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                  gap-4 sm:gap-6">
                  {[
                    {
                      label: 'Property Type',
                      name: 'type',
                      options: [
                        { value: 'all', label: 'All Properties' },
                        { value: 'houses', label: 'Houses' },
                        { value: 'apartments', label: 'Apartments' },
                        { value: 'villas', label: 'Villas' },
                        { value: 'lands', label: 'Lands' }
                      ]
                    },
                    {
                      label: 'Location',
                      name: 'location',
                      options: [
                        { value: 'all', label: 'All Locations' },
                        { value: 'dunusa', label: 'Dunusa' },
                        { value: 'makuleni', label: 'Makuleni' },
                        { value: 'loliwe', label: 'Loliwe' },
                        { value: 'emagesini', label: 'Emagesini' }
                      ]
                    },
                    {
                      label: 'Bedrooms',
                      name: 'bedrooms',
                      options: [
                        { value: 'all', label: 'Any' },
                        { value: '1', label: '1 Bedroom' },
                        { value: '2', label: '2 Bedrooms' },
                        { value: '3', label: '3 Bedrooms' },
                        { value: '4+', label: '4+ Bedrooms' }
                      ]
                    },
                    {
                      label: 'Bathrooms',
                      name: 'bathrooms',
                      options: [
                        { value: 'all', label: 'Any' },
                        { value: '1', label: '1 Bathroom' },
                        { value: '2', label: '2 Bathrooms' },
                        { value: '3', label: '3 Bathrooms' },
                        { value: '4+', label: '4+ Bathrooms' }
                      ]
                    },
                    {
                      label: 'Garages',
                      name: 'garages',
                      options: [
                        { value: 'all', label: 'Any' },
                        { value: 'none', label: 'No Garage' },
                        { value: '1', label: '1 Garage' },
                        { value: '2', label: '2 Garages' },
                        { value: '3+', label: '3+ Garages' }
                      ]
                    },
                    {
                      label: 'Property Size',
                      name: 'propertySize',
                      options: [
                        { value: 'all', label: 'Any Size' },
                        { value: 'small', label: 'Under 100m²' },
                        { value: 'medium', label: '100-200m²' },
                        { value: 'large', label: '200-300m²' },
                        { value: 'xlarge', label: 'Over 300m²' }
                      ]
                    },
                    {
                      label: 'Price Range',
                      name: 'priceRange',
                      options: activeTab === 'buy' 
                        ? [
                            { value: 'all', label: 'Any Price' },
                            { value: '1st', label: 'R200k - R400k' },
                            { value: '2nd', label: 'R400k - R600k' },
                            { value: '3rd', label: 'R600k - R800k' },
                            { value: '4th', label: 'R800k - R900k+' }
                          ]
                        : [
                            { value: 'all', label: 'Any Price' },
                            { value: '1st', label: 'R2k - R3k' },
                            { value: '2nd', label: 'R3k - R4k' },
                            { value: '3rd', label: 'R4k - R5k' },
                            { value: '4th', label: 'R5k - R6k' }
                          ]
                    }
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="block text-white text-sm font-medium">
                        {field.label}
                      </label>
                      <select
                        value={selectedFilters[field.name]}
                        onChange={(e) => handleFilterChange(field.name, e.target.value)}
                        className="w-full p-3 bg-white/10 border border-white/20 
                          rounded-xl text-white focus:outline-none focus:ring-2 
                          dark:focus:ring-orange-500 focus:ring-gray-500 focus:border-transparent 
                          transition-all duration-300"
                      >
                        {field.options.map((option) => (
                          <option 
                            key={option.value} 
                            value={option.value}
                            className="bg-gray-800 dark:bg-orange-600 text-white"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </form>

              {/* Property Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-20">
                {filterProperties(properties[activeTab]).map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
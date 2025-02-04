import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Logo&Nav/Navbar";
import Footer from "./components/Logo&Nav/Footer";
import Home from "./components/pages/Home";
import Browse from "./components/Browse";
import SavedProperties from "./components/SavedProperties";
import PageNotFound from "./components/pages/PageNotFound";
import Order from "./components/Order";

// Import all images
import img1 from "./assets/images/rdp1.jpg";
import img2 from "./assets/images/rdp2.jpg";
import img3 from "./assets/images/rdp3.jpg";
import img4 from "./assets/images/rdp4.jpg";
import img5 from "./assets/images/rdp5.jpg";
import img6 from "./assets/images/rdp6.jpg";
import img7 from "./assets/images/rdp7.jpg";
import img8 from "./assets/images/rdp8.jpg";
import img9 from "./assets/images/rdp9.jpg";
import img10 from "./assets/images/rdp10.jpg";
import img11 from "./assets/images/rdp11.jpg";
import img12 from "./assets/images/rdp12.jpg";

// Import owner images
import pers1 from "./assets/images/pers1.jpg"

// Image mapping object
const imageMap = {
  "./assets/images/rdp1.jpg": img1,
  "./assets/images/rdp2.jpg": img2,
  "./assets/images/rdp3.jpg": img3,
  "./assets/images/rdp4.jpg": img4,
  "./assets/images/rdp5.jpg": img5,
  "./assets/images/rdp6.jpg": img6,
  "./assets/images/rdp7.jpg": img7,
  "./assets/images/rdp8.jpg": img8,
  "./assets/images/rdp9.jpg": img9,
  "./assets/images/rdp10.jpg": img10,
  "./assets/images/rdp11.jpg": img11,
  "./assets/images/rdp12.jpg": img12,
  "./assets/images/pers1.jpg": pers1,
};

function App() {
  const [properties, setProperties] = useState({ buy: [], rent: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        
        // Process the data to replace image paths with imported images
        const processedData = {
          buy: data.buy.map(property => ({
            ...property,
            image: imageMap[property.image] || property.image,
            ownerPic: imageMap[property.ownerPic] || property.ownerPic,
          })),
          rent: data.rent.map(property => ({
            ...property,
            image: imageMap[property.image] || property.image,
            ownerPic: imageMap[property.ownerPic] || property.ownerPic,
          }))
        };

        setProperties(processedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (error) {
    return <div className="text-center mt-8">Error loading properties: {error}</div>;
  }

  if (loading) {
    return <div className="text-center mt-8">Loading properties...</div>;
  }

  return (
    <Router>
      <div className="sm:pt-[92px] pt-[92px] lg:pt-[78px] pb-16 select-none">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/explore" 
            element={<Browse properties={properties} />} 
          />
          <Route path="/order" element={<Order properties={properties} />} />
          <Route path="/saved" element={<SavedProperties properties={properties} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
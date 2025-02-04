import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Logo&Nav/Navbar";
import Footer from "./components/Logo&Nav/Footer";
import Home from "./components/pages/Home";
import Browse from "./components/Browse";
import SavedProperties from "./components/SavedProperties";
import PageNotFound from "./components/pages/PageNotFound";
import Order from "./components/Order";


function App() {

  return (
    
      <Router>
        <div className="sm:pt-[92px] pt-[92px] lg:pt-[78px] pb-16 select-none">
          <Navbar />  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Browse />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<SavedProperties />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
        
      </Router>
  )
}

export default App

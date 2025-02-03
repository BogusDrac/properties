import { Heart, Search, Telescope } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { icon: Search, label: 'Search', to: '/' },
    { icon: Telescope, label: 'Explore', to: '/explore' },
    { icon: Heart, label: 'Saved', to: '/saved' },
  ];

  return (
    <footer className="select-none fixed bottom-0 w-full bg-gray-300/90 
      dark:bg-orange-950/90 shadow-md z-[9999] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center py-2 sm:py-4">
          {navItems.map(({ icon: Icon, label, to }) => (
            <NavLink 
              key={label} 
              to={to} 
              className="flex flex-col justify-center items-center group 
                dark:hover:text-orange-600 hover:text-white transition-all cursor-pointer" 
              activeClassName="text-orange-600"
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              <p className="text-xs sm:text-sm mt-1 dark:text-gray-300">{label}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import DarkMode from "../Theme/DarkMode";

const Navbar = () => {
  return (
    <nav className="bg-gray-300/90 dark:bg-orange-950/90 select-none fixed top-0 w-full 
      dark:shadow-2xl shadow-2xl border-black z-[9999] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold dark:text-white 
            leading-loose transition-all duration-300">
            VillaLiza{" "}
            <span className="font-bold text-orange-600 dark:text-gray-300/50">
              Properties
            </span>
          </h1>
          <div className="pb-5 hover:text-white dark:hover:text-orange-600"><DarkMode /></div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative">
      <Moon
        onClick={toggleTheme}
        className={`w-14 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300 hover:text-white dark:hover:text-orange-600`}
      />
      <Sun
        onClick={toggleTheme}
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      />
    </div>
  );
};

export default DarkMode;

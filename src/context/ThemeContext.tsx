import React, { createContext, useState, useEffect, ReactNode } from "react";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Try to get the theme preference from localStorage
    const savedTheme = localStorage.getItem("darkMode");
    // If a preference exists, use it; otherwise check system preference
    if (savedTheme !== null) {
      return savedTheme === "true";
    }
    // Check if user prefers dark mode at system level
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update localStorage and apply dark mode class when theme changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    // Apply class to body instead of html element for more consistent styling
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

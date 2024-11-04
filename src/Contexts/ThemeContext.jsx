// ThemeContext.js, this is a self contained context
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Step 1: Import PropTypes

// Create the ThemeContext
const ThemeContext = createContext();

// Create a custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component that holds the theme state and toggle function
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");// "light" is the default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

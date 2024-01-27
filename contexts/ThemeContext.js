// context/ThemeContext.js
'use client'
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const themes = ['theme-night', 'theme-rose', 'theme-green', 'theme-orange'];

    // Function to get a random theme
    const getRandomTheme = () => {
        const randomIndex = Math.floor(Math.random() * themes.length);
        return themes[randomIndex];
    };

    // Get the initial theme from localStorage or set it to a random one if not found
    const initialTheme = /*localStorage.getItem('theme') ||*/ getRandomTheme();

    // Set the initial theme
    const [theme, setTheme] = useState(initialTheme);

    // Custom function to update the theme and store it in localStorage
    const updateTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ themes, theme, setTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

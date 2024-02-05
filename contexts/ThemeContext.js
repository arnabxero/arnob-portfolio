'use client';
import React, { createContext, useContext, useState, } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const themes = ['theme-night', 'theme-rose', 'theme-green', 'theme-orange'];

    const getRandomTheme = () => {
        const randomIndex = Math.floor(Math.random() * themes.length);
        return themes[randomIndex];
    };

    const [theme, setTheme] = useState(null);

    if (!theme) {
        setTheme(getRandomTheme());
    }

    const updateTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ themes, theme, setTheme: updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
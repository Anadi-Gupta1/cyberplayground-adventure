
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark';  // Only allow dark theme

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;  // Keeping this for compatibility but it won't change the theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme] = useState<Theme>('dark');  // Always dark

  useEffect(() => {
    // Always add dark class to document
    document.documentElement.classList.add('dark');
    
    // Save to localStorage for consistency
    localStorage.setItem('theme', theme);
    
    // Apply specific styles for the app
    document.body.classList.add('animated-gradient');
    
    // Show console message for developers
    console.log('CyberVerse - Running in dark mode only');
    
    return () => {
      // Clean up if component unmounts
      document.body.classList.remove('animated-gradient');
    };
  }, [theme]);

  const toggleTheme = () => {
    // This function is kept for compatibility but does nothing
    console.log('Theme toggle attempted, but site is dark-mode only');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

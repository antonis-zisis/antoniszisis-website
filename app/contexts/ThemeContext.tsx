import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

const THEME_NAME = 'az-theme';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: VoidFunction;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(THEME_NAME) as Theme | null;

      if (storedTheme) {
        return storedTheme;
      }

      const systemPreference = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      return systemPreference ? 'dark' : 'light';
    }

    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_NAME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

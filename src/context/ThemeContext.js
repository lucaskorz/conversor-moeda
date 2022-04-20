import { createContext, useState } from 'react'

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  
  function onToggleTheme() {
    return setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{
      theme,
      onToggleTheme,
    }}>
      { children }
    </ThemeContext.Provider>
  );
  
}
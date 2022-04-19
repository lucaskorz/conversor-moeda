import { createContext, useState } from 'react'

export const ThemeContexto = createContext('dark');

export function ThemeContext({ children }) {
  
  function onToggleTheme() {
    return setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark')
  }

  const [theme, setTheme] = useState('dark');

  <ThemeContexto.Provider value={{
    theme,
    onToggleTheme,
  }}>
    { children }
  </ThemeContexto.Provider>
}
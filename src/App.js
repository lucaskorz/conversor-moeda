import PageInitial from './components/page-initial/Page-Initial'
import { createContext, useState } from 'react';
//import axios from 'axios'

const ThemeContexto = './ThemeContext';

export default function App() {
  const theme = useState('dark');

  return (
    <ThemeContexto>
      <PageInitial/>
    </ThemeContexto>
  );
}

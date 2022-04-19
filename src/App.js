import PageInitial from './components/page-initial/Page-Initial'
import { useState } from 'react';
//import axios from 'axios'

const ThemeContexto = './ThemeContext';

export default function App() {
  return (
    <ThemeContexto>
      <PageInitial/>
    </ThemeContexto>
  );
}

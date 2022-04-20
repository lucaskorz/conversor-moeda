import PageInitial from './components/page-initial/Page-Initial'

import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <PageInitial/>
    </ThemeProvider>
  );
}

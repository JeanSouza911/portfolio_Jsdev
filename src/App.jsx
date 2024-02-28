import { useState } from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { GlobalStyles } from './styles/Global';

function App() {
  const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;


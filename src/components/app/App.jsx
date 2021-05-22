// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Sidebar from '../sidebar/Sidebar';
import Table from '../table/Table';
import TableHeader from '../tableheader/TableHeader';

import Toggle from '../toggler/Toggler';
import useDarkMode from '../hooks/useDarkMode';
import GlobalStyles from '../globalstyles/GlobalStyles';
import { darkTheme, lightTheme } from '../themes/Themes';

// import AppContext from '../../contexts/AppContext';

function App() {
  // const [isDark, setIsDark] = useState(false);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
  // <AppContext.Provider value={{ isDark: [isDark, setIsDark] }}>
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Sidebar />
        <TableHeader />
        <Table />
      </div>
    </ThemeProvider>
  // </AppContext.Provider>
  );
}

export default App;

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import Sidebar from '../sidebar/Sidebar';
import Table from '../table/Table';
import TableHeader from '../tableheader/TableHeader';

import Toggler from '../toggler/Toggler';
import useDarkMode from '../hooks/useDarkMode';
import GlobalStyles from '../globalstyles/GlobalStyles';
import { darkTheme, lightTheme } from '../themes/Themes';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <Sidebar>
          <Toggler theme={theme} toggleTheme={themeToggler} />
        </Sidebar>
        <TableHeader />
        <Table />
      </div>
    </ThemeProvider>
  );
}

export default App;

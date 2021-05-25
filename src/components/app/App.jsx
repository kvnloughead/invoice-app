// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import AppContext from '../../contexts/AppContext';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';

import Toggler from '../toggler/Toggler';
import useDarkMode from '../hooks/useDarkMode';
import GlobalStyles from '../globalstyles/GlobalStyles';
import { darkTheme, lightTheme } from '../themes/Themes';

function App() {
  const [currentInvoice, setCurrentInvoice] = React.useState(null);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <AppContext.Provider value={{ currentInvoice, setCurrentInvoice }}>
        <GlobalStyles />
        <div className="App">
          <Sidebar>
            <Toggler theme={theme} toggleTheme={themeToggler} />
          </Sidebar>
          <Main />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import AppContextProvider from '../../contexts/AppContextProvider';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Form from '../form/Form';

import useDarkMode from '../common/hooks/useDarkMode';
import GlobalStyles from '../common/globalstyles/GlobalStyles';
import { darkTheme, lightTheme } from '../themes/Themes';
import FormContextProvider from '../../contexts/FormContextProvider';
import Overlay from '../common/overlay/overlay';

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <AppContextProvider>
        <FormContextProvider>
          <GlobalStyles />
          <Overlay />
          <Sidebar theme={theme} themeToggler={themeToggler} />
          <Main />
          <Form />
        </FormContextProvider>
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;

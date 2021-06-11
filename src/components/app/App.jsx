import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import AppContext from '../../contexts/AppContext';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Form from '../form/Form';

// import Toggler from '../toggler/Toggler';
import useDarkMode from '../common/hooks/useDarkMode';
import GlobalStyles from '../common/globalstyles/GlobalStyles';
import { darkTheme, lightTheme } from '../themes/Themes';
import { processInvoices } from '../../utils/helpers';
import rawInvoices from '../../utils/data.json';
import FormContextProvider from '../../contexts/FormState';

function App() {
  const processedInvoices = useMemo(() => processInvoices(rawInvoices));
  const [invoices, setInvoices] = React.useState(processedInvoices);
  const [currentInvoice, setCurrentInvoice] = React.useState(null);
  const [currentForm, setCurrentForm] = React.useState(null);
  const state = {
    invoices, setInvoices, currentInvoice, setCurrentInvoice, currentForm, setCurrentForm,
  };

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <AppContext.Provider value={state}>
        <FormContextProvider>
          <GlobalStyles />
          <Sidebar themeToggler={themeToggler} />
          <Main />
          <Form />
        </FormContextProvider>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;

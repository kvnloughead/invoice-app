// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import AppContext from '../../contexts/AppContext';
import Sidebar from '../sidebar/Sidebar';
import Table from '../table/Table';
import TableHeader from '../tableheader/TableHeader';

import Toggler from '../toggler/Toggler';
import useDarkMode from '../hooks/useDarkMode';
import GlobalStyles from '../globalstyles/GlobalStyles';
import { darkTheme, lightTheme } from '../themes/Themes';

function App() {
  const [currentInvoice, setCurrentInvoice] = React.useState({
    id: 'RT3080',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.90,
        total: 1800.90,
      },
    ],
    total: 1800.90,
  });

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
          <TableHeader />
          <Table />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;

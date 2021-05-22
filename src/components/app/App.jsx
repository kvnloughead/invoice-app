// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import './App.css';

import Sidebar from '../sidebar/Sidebar';
import Table from '../table/Table';
import TableHeader from '../tableheader/TableHeader';

import AppContext from '../../contexts/AppContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <AppContext.Provider value={{ isDark: [isDark, setIsDark] }}>
      <div className="App">
        <Sidebar />
        <TableHeader />
        <Table />
      </div>
    </AppContext.Provider>
  );
}

export default App;

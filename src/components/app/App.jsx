// eslint-disable-next-line no-use-before-define
import React from 'react';
import './App.css';

import Table from '../table/Table';
import TableHeader from '../tableheader/TableHeader';

function App() {
  return (
    <div className="App">
      <TableHeader />
      <Table />
    </div>
  );
}

export default App;

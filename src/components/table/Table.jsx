import React from 'react';

import  { TableContainer } from './style';
import invoices from '../../utils/data.json';

import InvoiceSummary from '../invoicesummary/InvoiceSummary';

function Table() {
  return (
    <TableContainer>
      {invoices.map((invoice) => (
        <InvoiceSummary data={invoice} key={invoice.id}></InvoiceSummary>
      ))}
    </TableContainer>
  );
}

export default Table;

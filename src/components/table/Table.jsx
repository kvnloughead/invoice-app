// eslint-disable-next-line no-use-before-define
import React from 'react';

import TableContainer from './style';
import invoices from '../../utils/data.json';

import InvoiceSummary from '../invoicesummary/InvoiceSummary';

function Table() {
  return (
    <TableContainer>
      {invoices.map((invoice) => (
        <InvoiceSummary data={invoice} key={invoice.id} />
      ))}
    </TableContainer>
  );
}

export default Table;

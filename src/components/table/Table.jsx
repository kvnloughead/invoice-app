// eslint-disable-next-line no-use-before-define
import React, { useMemo } from 'react';

import TableContainer from './style';
import invoices from '../../utils/data.json';
import { processInvoices } from '../../utils/helpers';

import InvoiceSummary from '../invoicesummary/InvoiceSummary';

function Table() {
  const processedInvoices = useMemo(() => processInvoices(invoices));
  return (
    <TableContainer>
      {processedInvoices.map((invoice) => (
        <InvoiceSummary data={invoice} key={invoice.id} />
      ))}
    </TableContainer>
  );
}

export default Table;

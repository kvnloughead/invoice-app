// eslint-disable-next-line no-use-before-define
import React, { useMemo } from 'react';

// import nothingHere from '../../images/nothing-here.png';
// import nothingHereDark from '../../images/nothing-here-dark.png';
import { TableContainer, NothingHere } from './style';
// import invoices from '../../utils/data.json';
import { processInvoices } from '../../utils/helpers';

import InvoiceSummary from '../invoicesummary/InvoiceSummary';

function Table() {
  const processedInvoices = useMemo(() => processInvoices([]));

  if (processedInvoices.length === 0) {
    // eslint-disable-next-line react/prop-types
    return (<NothingHere />);
  }

  return (
    <TableContainer>
      {processedInvoices.map((invoice) => (
        <InvoiceSummary data={invoice} key={invoice.id} />
      ))}
    </TableContainer>
  );
}

export default Table;

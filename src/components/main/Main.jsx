import React from 'react';

import AppContext from '../../contexts/AppContext';
import { SummaryContainer, NothingHere } from './style';

import InvoiceToolbar from './invoicetoolbar/InvoiceToolbar';
import Invoice from '../invoice/Invoice';
import SummaryHeader from './summaryheader/SummaryHeader';
import InvoiceSummary from './invoicesummary/InvoiceSummary';

function Main() {
  const { currentInvoice, invoices } = React.useContext(AppContext);
  const numInvoices = invoices.length;

  if (numInvoices === 0) {
    return (<NothingHere />);
  }

  if (currentInvoice && currentInvoice.clientName) {
    return (
      <div>
        <InvoiceToolbar />
        <Invoice />
      </div>
    );
  }

  return (
    <div>
      <SummaryHeader numInvoices={numInvoices} />
      <SummaryContainer>
        {invoices.map((invoice) => (
          <InvoiceSummary data={invoice} key={invoice.id} />
        ))}
      </SummaryContainer>
    </div>
  );
}

export default Main;

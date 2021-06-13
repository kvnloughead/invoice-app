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

  if (currentInvoice && currentInvoice.clientName) {
    return (
      <main>
        <InvoiceToolbar />
        <Invoice />
      </main>
    );
  }

  if (numInvoices === 0) {
    return (
      <main>
        <SummaryHeader />
        <NothingHere />
      </main>
    );
  }

  return (
    <main>
      <SummaryHeader numInvoices={numInvoices} />
      <SummaryContainer>
        {invoices.map((invoice) => (
          <InvoiceSummary data={invoice} key={invoice.id} />
        ))}
      </SummaryContainer>
    </main>
  );
}

export default Main;

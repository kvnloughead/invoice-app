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

  if (currentInvoice) {
    return (
      <>
        <InvoiceToolbar />
        <Invoice />
      </>
    );
  }

  return (
    <>
      <SummaryHeader numInvoices={numInvoices} />
      <SummaryContainer>
        {invoices.map((invoice) => (
          <InvoiceSummary data={invoice} key={invoice.id} />
        ))}
      </SummaryContainer>
    </>
  );
}

export default Main;

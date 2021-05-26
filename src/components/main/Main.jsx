// eslint-disable-next-line no-use-before-define
import React, { useMemo } from 'react';

import AppContext from '../../contexts/AppContext';

import { SummaryContainer, NothingHere } from './style';
import invoices from '../../utils/data.json';
import { processInvoices } from '../../utils/helpers';

import InvoiceToolbar from '../invoicetoolbar/InvoiceToolbar';
import Invoice from '../invoice/Invoice';
import SummaryHeader from '../summaryheader/SummaryHeader';
import InvoiceSummary from '../invoicesummary/InvoiceSummary';

function Main() {
  const { currentInvoice } = React.useContext(AppContext);
  const processedInvoices = useMemo(() => processInvoices(invoices));
  const numInvoices = processedInvoices.length;

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
        {processedInvoices.map((invoice) => (
          <InvoiceSummary data={invoice} key={invoice.id} />
        ))}
      </SummaryContainer>
    </>
  );
}

export default Main;

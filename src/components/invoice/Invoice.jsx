import React from 'react';

import AppContext from '../../contexts/AppContext';
import Address from './address/Address';
import InvoiceItems from './invoiceitems/InvoiceItems';
import { formatDate } from '../../utils/helpers';

import {
  InvoiceContainer, TopLeft, Id, Description, Middle,
  Label, Item, SentTo, AmountDue,
} from './style';

const Invoice = () => {
  const { currentInvoice } = React.useContext(AppContext);

  return (
    <InvoiceContainer>
      <TopLeft>
        <Id>{currentInvoice.id}</Id>
        <Description>{currentInvoice.description}</Description>
      </TopLeft>
      <Address ta="right" data={currentInvoice.senderAddress} />
      <Middle>
        <Label col="1">Invoice Date</Label>
        <Item row="2" col="1">{formatDate(currentInvoice.createdAt)}</Item>
        <Label row="4" col="1">Payment Due</Label>
        <Item row="5" col="1">{formatDate(currentInvoice.paymentDue)}</Item>
        <Label row="1" col="2">Bill To</Label>
        <Item row="2" col="2">{currentInvoice.clientName}</Item>
        <Address row="3" col="2" data={currentInvoice.clientAddress} />
        <Label row="1" col="3">Sent to</Label>
        <Item row="2" col="3">{currentInvoice.clientEmail}</Item>
      </Middle>
      <SentTo />
      <InvoiceItems items={currentInvoice.items} total={currentInvoice.total} />
      <AmountDue />
    </InvoiceContainer>
  );
};

export default Invoice;

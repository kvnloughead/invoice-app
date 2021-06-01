// eslint-disable-next-line no-use-before-define
import React from 'react';

import AppContext from '../../contexts/AppContext';
import PaidStatus from '../paidstatus/PaidStatus';
import Button from '../button/Button';

import {
  Container, BackButton, Toolbar, Label, FlexRow, Buttons,
} from './style';

const InvoiceToolbar = () => {
  const {
    currentInvoice, setCurrentInvoice, setCurrentForm, setInvoices, invoices,
  } = React.useContext(AppContext);

  const goBack = () => {
    setCurrentInvoice(null);
  };

  const openEditForm = () => {
    setCurrentForm('edit');
  };

  const deleteInvoice = () => {
    debugger;
    setInvoices(invoices.filter((invoice) => invoice.id !== currentInvoice.id));
    setCurrentInvoice(null);
  };

  const markAsPaid = () => {
    setCurrentInvoice({ ...currentInvoice, status: 'Paid' });
  };

  return (
    <Container>
      <BackButton onClick={goBack}>Go back</BackButton>
      <Toolbar currentInvoice={currentInvoice}>
        <FlexRow>
          <Label>Status</Label>
          <PaidStatus status={currentInvoice.status} />
        </FlexRow>
        <Buttons>
          <Button type="edit" handleClick={openEditForm} />
          <Button type="delete" handleClick={deleteInvoice} />
          <Button type="markAsPaid" handleClick={markAsPaid} />
        </Buttons>
      </Toolbar>
    </Container>
  );
};

export default InvoiceToolbar;

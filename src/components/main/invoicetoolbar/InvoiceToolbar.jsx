import React from 'react';

import AppContext from '../../../contexts/AppContext';
import PaidStatus from '../../common/paidstatus/PaidStatus';
import Button from '../../common/button/Button';

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
          <Button buttonStyle="edit" handleClick={openEditForm} />
          <Button buttonStyle="delete" handleClick={deleteInvoice} />
          <Button buttonStyle="markAsPaid" handleClick={markAsPaid} />
        </Buttons>
      </Toolbar>
    </Container>
  );
};

export default InvoiceToolbar;

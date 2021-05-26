// eslint-disable-next-line no-use-before-define
import React from 'react';

import AppContext from '../../contexts/AppContext';
import PaidStatus from '../paidstatus/PaidStatus';
import Button from '../button/Button';

import {
  Container, BackButton, Toolbar, Label, FlexRow, Buttons,
} from './style';

const InvoiceToolbar = () => {
  const { currentInvoice, setCurrentInvoice } = React.useContext(AppContext);

  const goBack = () => {
    setCurrentInvoice(null);
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
          <Button type="edit" />
          <Button type="delete" />
          <Button type="markAsPaid" />
        </Buttons>
      </Toolbar>
    </Container>
  );
};

export default InvoiceToolbar;

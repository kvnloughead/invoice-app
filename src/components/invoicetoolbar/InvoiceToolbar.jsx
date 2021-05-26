// eslint-disable-next-line no-use-before-define
import React from 'react';

import AppContext from '../../contexts/AppContext';
import PaidStatus from '../paidstatus/PaidStatus';
import Button from '../button/Button';

import {
  Container, GoBack, Toolbar, Label, FlexRow, Buttons,
} from './style';

const InvoiceToolbar = () => {
  const { currentInvoice } = React.useContext(AppContext);

  return (
    <Container>
      <GoBack>Go back</GoBack>
      <Toolbar currentInvoice={currentInvoice}>
        <FlexRow>
          <Label>Status</Label>
          <PaidStatus status={currentInvoice.status} />
        </FlexRow>
        <Buttons>
          <Button type="edit" />
          <Button type="delete" />
          <Button type="markPaid" />
        </Buttons>
      </Toolbar>
    </Container>
  );
};

export default InvoiceToolbar;

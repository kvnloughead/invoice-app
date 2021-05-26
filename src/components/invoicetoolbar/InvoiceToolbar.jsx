// eslint-disable-next-line no-use-before-define
import React from 'react';

import AppContext from '../../contexts/AppContext';
import {
  Container, GoBack, Toolbar, Label,
} from './style';

const InvoiceToolbar = () => {
  const { currentInvoice } = React.useContext(AppContext);

  return (
    <Container>
      <GoBack>Go back</GoBack>
      <Toolbar currentInvoice={currentInvoice}>
        <Label>Status</Label>
      </Toolbar>
    </Container>
  );
};

export default InvoiceToolbar;

// eslint-disable-next-line no-use-before-define
import React from 'react';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

import { Container, Title, Text } from './style';
import { FlexRow } from '../utility/style';

const TableHeader = () => {
  const [numInvoices] = React.useState(7);

  return (
    <>
      <Container>
        <div>
          <Title>Invoices</Title>
          <Text>
            There are
            {numInvoices}
            {' '}
            total invoices
          </Text>
        </div>
        <FlexRow ai="center">
          <Dropdown />
          <Button type="newInvoice" mode="light" />
        </FlexRow>
      </Container>
    </>
  );
};

export default TableHeader;

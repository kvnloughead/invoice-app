import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import { Container, Title, Text } from  './style';

const TableHeader = () => {
  const [numInvoices, ] = React.useState(7);
  return (
    <>
      <Container>
        <div>
          <Title>Invoices</Title>
          <Text>There are {numInvoices} total invoices</Text>
        </div>
        <Dropdown />
      </Container>
    </>
  );
}

export default TableHeader;

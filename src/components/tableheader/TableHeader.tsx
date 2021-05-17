import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import { Title, Text } from  './style';

const TableHeader = () => {
  const [numInvoices, ] = React.useState(7);
  return (
    <>
      <Title>Invoices</Title>
      <Text>There are {numInvoices} total invoices</Text>
      <Dropdown />
    </>
  );
}

export default TableHeader;

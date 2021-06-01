// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';
import { blankInvoice } from '../../utils/constants';

import {
  Container, Title, Text, Row,
} from './style';

const SummaryHeader = ({ numInvoices }) => {
  const { setCurrentForm, setCurrentInvoice } = React.useContext(AppContext);
  const openNewInvoiceForm = () => {
    setCurrentInvoice(blankInvoice);
    setCurrentForm('new');
  };

  return (
    <>
      <Container>
        <div>
          <Title>Invoices</Title>
          <Text>
            There are
            {` ${numInvoices}`}
            {' '}
            total invoices
          </Text>
        </div>
        <Row ai="center">
          <Dropdown type="filterBy" />
          <Button handleClick={openNewInvoiceForm} type="newInvoice" mode="light" />
        </Row>
      </Container>
    </>
  );
};

SummaryHeader.propTypes = {
  numInvoices: PropTypes.number.isRequired,
};

export default SummaryHeader;

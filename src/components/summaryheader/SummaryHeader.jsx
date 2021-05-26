// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown/Dropdown';
import Button from '../button/Button';

import {
  Container, Title, Text, Row,
} from './style';

const SummaryHeader = ({ numInvoices }) => (
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
        <Dropdown />
        <Button type="newInvoice" mode="light" />
      </Row>
    </Container>
  </>
);

SummaryHeader.propTypes = {
  numInvoices: PropTypes.number.isRequired,
};

export default SummaryHeader;

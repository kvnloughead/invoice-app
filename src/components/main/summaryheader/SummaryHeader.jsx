import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '../../../contexts/AppContext';
import Dropdown from '../../common/dropdown/Dropdown';
import Button from '../../common/button/Button';
import { blankInvoice } from '../../../utils/constants';

import {
  Container, Title, Text, Row,
} from './style';

const SummaryHeader = ({ numInvoices }) => {
  const { setCurrentForm, setCurrentInvoice, setIsOverlayOpen } = useContext(AppContext);
  const openNewInvoiceForm = () => {
    setCurrentInvoice(blankInvoice);
    setCurrentForm('new');
    setIsOverlayOpen(true);
  };

  // eslint-disable-next-line max-len
  // const invoiceCountString = numInvoices > 0 ? `There are ${numInvoices} total invoices` : 'No invoices';

  return (
    <>
      <Container>
        <div>
          <Title>Invoices</Title>
          <Text numInvoices={numInvoices} />
          {/* {invoiceCountString}
          </Text> */}
        </div>
        <Row ai="center">
          <Dropdown type="filterBy" />
          <Button handleClick={openNewInvoiceForm} buttonStyle="newInvoice" mode="light" />
        </Row>
      </Container>
    </>
  );
};

SummaryHeader.propTypes = {
  numInvoices: PropTypes.number.isRequired,
};

export default SummaryHeader;

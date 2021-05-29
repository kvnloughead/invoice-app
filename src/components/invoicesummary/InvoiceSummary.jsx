// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import AppContext from '../../contexts/AppContext';
import PaidStatus from '../paidstatus/PaidStatus';

import {
  SummaryContainer, Id, Date, Name, Cost, ViewInvoiceButton,
} from './style';

const InvoiceSummary = ({ data }) => {
  const { setCurrentInvoice } = React.useContext(AppContext);
  const viewInvoice = (invoice) => {
    setCurrentInvoice(invoice);
  };

  return (
    <SummaryContainer>
      <Id>{data.id}</Id>
      <Date>{`Due ${data.createdAt}`}</Date>
      <Name>{data.clientName}</Name>
      <Cost>{data.total}</Cost>
      <PaidStatus status={data.status} />
      <ViewInvoiceButton onClick={() => viewInvoice(data)} />
    </SummaryContainer>
  );
};

InvoiceSummary.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.string,
    clientName: PropTypes.string,
    total: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default InvoiceSummary;

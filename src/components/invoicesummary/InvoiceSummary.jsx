// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import {
  SummaryContainer, NumberSign, Id, Date, Name, Cost, Dot, PaidStatus, RightArrow,
} from './style';

const InvoiceSummary = ({ data }) => (
  <SummaryContainer>
    <Id>
      <NumberSign>#</NumberSign>
      {data.id}
    </Id>
    <Date>{data.createdAt}</Date>
    <Name>{data.clientName}</Name>
    <Cost>{data.total}</Cost>
    <PaidStatus status={data.status}>
      <p>
        <Dot>&middot;</Dot>
        {data.status}
      </p>
    </PaidStatus>
    <RightArrow />
  </SummaryContainer>
);

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

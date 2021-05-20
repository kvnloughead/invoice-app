import React from 'react';

import  { SummaryContainer, NumberSign, Id, Date, Name, Cost, Dot, PaidStatus, RightArrow } from './style';

const InvoiceSummary = ({ data }) => {
  return (
  <SummaryContainer>
    <Id><NumberSign>#</NumberSign>{data.id}</Id>
    <Date>{data.createdAt}</Date>
    <Name>{data.clientName}</Name>
    <Cost>{data.total}</Cost>
    <PaidStatus status={data.status}>
      <p><Dot>&middot;</Dot>{data.status}</p>
    </PaidStatus>
    <RightArrow />
  </SummaryContainer>
)};

export default InvoiceSummary;
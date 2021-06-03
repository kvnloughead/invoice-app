import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const paidStatusColors = {
  Paid: { color: 'rgba(51, 214, 159, 1)', background: 'rgba(51, 214, 159, .0571)' },
  Pending: { color: 'rgba(255, 143, 0, 1)', background: 'rgba(255, 143, 0, .0571)' },
  Draft: { color: 'rgba(55, 59, 83, 1)', background: 'rgba(55, 59, 83, .0571)' },
};

const Container = styled.li`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  width: 104px;
  height: 40px;
  color: ${(props) => props.status && paidStatusColors[props.status].color};
  background: ${(props) => props.status && paidStatusColors[props.status].background};
  border-radius: 3px;
  justify-self: end;
`;

const Dot = styled.span`
  font-size: 32px;
  vertical-align: sub;
`;

const PaidStatus = ({ status }) => (
  <Container status={status}>
    <p>
      <Dot>&middot;</Dot>
      {`${status}`}
    </p>
  </Container>
);

PaidStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default PaidStatus;

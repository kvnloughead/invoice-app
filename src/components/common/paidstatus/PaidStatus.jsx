import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { capitalizeFirstLetter } from '../../../utils/helpers';
import { paidStatusColors } from '../../../utils/constants';

const Container = styled.li`
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  max-width: 104px;
  height: 40px;
  color: ${(props) => props.status && paidStatusColors[props.status].color};
  background: ${(props) => props.status && paidStatusColors[props.status].background};
  border-radius: 3px;
  justify-self: end;
  padding: 0 18px;

  @media screen and (max-width: 768px) {
    grid-area: f;
  }
`;

const Dot = styled.span`
  font-size: 32px;
  vertical-align: sub;
`;

const PaidStatus = ({ status }) => (
  <Container status={status}>
    <p>
      <Dot>&middot;</Dot>
      {`${capitalizeFirstLetter(status)}`}
    </p>
  </Container>
);

PaidStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default PaidStatus;

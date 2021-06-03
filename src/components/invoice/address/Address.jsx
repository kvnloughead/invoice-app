import React from 'react';
import PropTypes, { string } from 'prop-types';

import { AddressContainer, AddressItem } from './style';

const Address = (({
  data, col, row, ta,
}) => (
  <AddressContainer col={col} row={row} ta={ta}>
    {Object.entries(data).map((entry) => (
      <AddressItem key={`${entry[0]}-${entry[1]}-${Math.random()}`}>{entry[1]}</AddressItem>
    ))}
  </AddressContainer>
)
);

export default Address;

Address.propTypes = {
  ta: string, // text-align
  col: string,
  row: string,
  data: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

Address.defaultProps = {
  ta: 'left',
  col: '',
  row: '',
};

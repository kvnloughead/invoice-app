// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes, { string } from 'prop-types';

import { AddressContainer, AddressItem } from './style';

const Address = (({
  data, col, row, ta,
}) => (
  <AddressContainer col={col} row={row} ta={ta}>
    {Object.entries(data).map((entry) => (
      <AddressItem>{entry[1]}</AddressItem>
    ))}
  </AddressContainer>
)
);

export default Address;

Address.propTypes = {
  ta: string.isRequired,
  col: string.isRequired,
  row: string.isRequired,
  data: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

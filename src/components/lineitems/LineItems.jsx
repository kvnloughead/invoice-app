// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes, { string } from 'prop-types';

import { lineItemNames } from '../../utils/constants';
import {
  Table, TableRow, TH, TD,
} from './style';

const LineItems = (({ items }) => (
  <Table>
    <thead>
      <TableRow>
        {Object.entries(items[0]).map((entry, i) => (
          <TH key={entry} row={i}>{lineItemNames[entry[0]]}</TH>
        ))}
      </TableRow>
    </thead>
    <tbody>
      {items.map((item) => (
        <TableRow key={Math.random()}>
          {Object.entries(item).map((entry, i) => (
            <TD key={Math.random()} row={i}>{entry[1]}</TD>
          ))}
        </TableRow>
      ))}
    </tbody>
  </Table>
));

LineItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: string.isRequired,
    quantity: string.isRequired,
    price: string.isRequired,
    total: string.isRequired,
  })).isRequired,
};

export default LineItems;

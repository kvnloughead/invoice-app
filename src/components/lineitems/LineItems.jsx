// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes, { string, number, oneOfType } from 'prop-types';

import { lineItemNames } from '../../utils/constants';
import {
  Table, TableRow, TH, TD, TableFooterRow, TF,
} from './style';

const LineItems = (({ items, total }) => (
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
    <tfoot>
      <TableFooterRow>
        <TF>Amount Due</TF>
        <TF>{ total }</TF>
      </TableFooterRow>
    </tfoot>
  </Table>
));

LineItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: string.isRequired,
    quantity: oneOfType([string, number]).isRequired,
    price: oneOfType([string, number]).isRequired,
    total: oneOfType([string, number]).isRequired,
  })).isRequired,
  total: oneOfType([string, number]).isRequired,
};

export default LineItems;

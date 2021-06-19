import React from 'react';
import PropTypes, { string, number, oneOfType } from 'prop-types';

import { lineItemNames } from '../../../utils/constants';
import { formatLineItems, formatCurrency } from '../../../utils/helpers';
// import AppContext from '../../../contexts/AppContext';
import {
  Table, TableHeader, TableRow, TH, TD, TableFooterRow, TF,
} from './style';

const InvoiceItems = (({ items, total }) => {
  const formattedItems = formatLineItems(items);
  // const { windowInnerWidth } = React.useContext(AppContext);
  // const isMobile = windowInnerWidth <= 768;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {Object.entries(formattedItems[0]).map((entry, i) => (
            <TH key={entry} col={i}>{lineItemNames[entry[0]]}</TH>
          ))}
        </TableRow>
      </TableHeader>
      <tbody>
        {formattedItems.map((item) => (
          <TableRow key={Math.random()}>
            {Object.entries(item).map((entry, i) => (
              <TD key={Math.random()} name={entry[0]} col={i}>{entry[1]}</TD>
            ))}
          </TableRow>
        ))}
      </tbody>
      <tfoot>
        <TableFooterRow>
          <TF>Amount Due</TF>
          <TF>{formatCurrency(total)}</TF>
        </TableFooterRow>
      </tfoot>
    </Table>
  );
});

InvoiceItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: string.isRequired,
    quantity: oneOfType([string, number]).isRequired,
    price: oneOfType([string, number]).isRequired,
    total: oneOfType([string, number]).isRequired,
  })).isRequired,
  total: oneOfType([string, number]).isRequired,
};

export default InvoiceItems;

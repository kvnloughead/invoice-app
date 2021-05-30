// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes, { string } from 'prop-types';

import { itemsListNames } from '../../utils/constants';
import { formatItemsList } from '../../utils/helpers';
import Button from '../button/Button';
import LineItem from '../lineitem/LineItem';
// import ItemsListInput from '../itemslistinput/ItemsListInput';

import {
  Fieldset, Legend, Table, Row, TH,
  // TD, Total, DeleteIcon,
} from './style';

// eslint-disable-next-line react/prop-types
const ItemsList = (({ items, setValues, values }) => {
  const formattedItems = formatItemsList(items);
  // const [totals, setTotals] = React.useState(formattedItems.map((item) => item.total));

  return (
    <Fieldset>
      <Legend>Item List</Legend>
      <Table>
        <thead>
          <Row>
            {Object.entries(formattedItems[0]).map((entry, i) => (
              <TH key={entry} col={i + 1}>{itemsListNames[entry[0]]}</TH>
            ))}
          </Row>
        </thead>
        <tbody>
          {formattedItems.map((item) => (
            <LineItem item={item} values={values} setValues={setValues} />
            // <Row>
            //   {Object.entries(item).slice(0, -1).map((entry, i) => (
            //     <TD col={i + 1}>
            //       <ItemsListInput
            //         data={{ keys: ['items', '0', entry[0]] }}
            //         item={item}
            //         values={values}
            //         setValues={setValues}
            //       />
            //     </TD>
            //   ))}
            //   <TD col={4}>
            //     <Total />
            //   </TD>
            //   <DeleteIcon col={5} />
            // </Row>
          ))}
        </tbody>
      </Table>
      <Button type="addNewItem" />
    </Fieldset>
  );
});

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: string.isRequired,
    quantity: string.isRequired,
    price: string.isRequired,
    total: string.isRequired,
  })).isRequired,
};

export default ItemsList;

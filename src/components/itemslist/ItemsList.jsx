// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes, { string } from 'prop-types';

import { itemsListNames } from '../../utils/constants';
import { formatItemsList } from '../../utils/helpers';
import Button from '../button/Button';
import LineItem from '../lineitem/LineItem';

import {
  Fieldset, Legend, Table, Row, TH,
} from './style';

// eslint-disable-next-line react/prop-types
const ItemsList = (({ items, setValues, values }) => {
  const [formattedItems, setFormattedItems] = React.useState(formatItemsList(items));
  // const formattedItems = formatItemsList(items);

  const handleAddNewItem = (evt) => {
    evt.preventDefault();
    const emptyItem = {
      name: '', quantity: '0', price: '0', total: '0',
    };
    setFormattedItems([...formattedItems, emptyItem]);
  };

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
          {formattedItems.map((item, i) => (
            <LineItem index={i} item={item} values={values} setValues={setValues} />
          ))}
        </tbody>
      </Table>
      <Button type="addNewItem" handleClick={handleAddNewItem} />
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

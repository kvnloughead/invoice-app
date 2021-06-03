import React from 'react';
import PropTypes, {
  string, number, oneOfType,
} from 'prop-types';

import { itemsListNames } from '../../../utils/constants';
import { formatItemsList } from '../../../utils/helpers';
import Button from '../../common/button/Button';
import LineItem from '../lineitem/LineItem';

import {
  Fieldset, Legend, Table, Row, TH,
} from './style';

// eslint-disable-next-line react/prop-types
const ItemsList = (({ items, setValues, values }) => {
  const [formattedItems, setFormattedItems] = React.useState(formatItemsList(items));

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
            <LineItem
              key={`${item.name}-${item.total}`}
              index={i}
              item={item}
              values={values}
              setValues={setValues}
              formattedItems={formattedItems}
              setFormattedItems={setFormattedItems}
            />
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
    quantity: oneOfType([string, number]).isRequired,
    price: oneOfType([string, number]).isRequired,
    total: oneOfType([string, number]).isRequired,
  })).isRequired,
};

ItemsList.defaultProps = {
};

export default ItemsList;

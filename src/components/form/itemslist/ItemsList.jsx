import React from 'react';
import PropTypes, {
  string, number, oneOfType,
} from 'prop-types';

import { itemsListNames } from '../../../utils/constants';
import Button from '../../common/button/Button';
import LineItem from '../lineitem/LineItem';
import FormContext from '../../../contexts/FormContext';

import {
  Fieldset, Legend, Table, Row, TH,
} from './style';

// eslint-disable-next-line react/prop-types
const ItemsList = (({ items }) => {
  const { values, setValues } = React.useContext(FormContext);
  const [formattedItems, setFormattedItems] = React.useState(items);

  const handleAddNewItem = (evt) => {
    evt.preventDefault();
    const emptyItem = {
      name: '', quantity: '0', price: '0', total: '0',
    };
    setValues({ ...values, items: [...items, emptyItem] });
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
              formattedItems={formattedItems}
              setFormattedItems={setFormattedItems}
            />
          ))}
        </tbody>
      </Table>
      <Button buttonStyle="addNewItem" handleClick={handleAddNewItem} />
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

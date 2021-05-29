// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes, { string } from 'prop-types';

import { itemsListNames } from '../../utils/constants';
import { formatItemsList } from '../../utils/helpers';
import Button from '../button/Button';

import {
  Fieldset, Legend, Table, Row, TD, TH, Input, DeleteIcon,
} from './style';

// eslint-disable-next-line react/prop-types
const ItemsList = (({ items, setValues, values }) => {
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: target.validationMessage });
    // setIsValid(target.closest('form').checkValidity());
  };
  const formattedItems = formatItemsList(items);
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
            <Row key={Math.random()}>
              {Object.entries(item).map((entry, i) => (
                <TD key={Math.random()} col={i + 1}>
                  <Input
                    id={`IL-${Object.entries(itemsListNames)[i][0]}-${i}`}
                    name={`IL-${Object.entries(itemsListNames)[i][0]}-${i}`}
                    defaultValue={entry[1]}
                    onChange={handleChange}
                  />
                </TD>
              ))}
              <DeleteIcon col={5} />
            </Row>
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

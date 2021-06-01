/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from 'react';

import ItemsListInput from '../itemslistinput/ItemsListInput';

import {
  Row, TD, Total, DeleteIcon,
} from './style';

// eslint-disable-next-line react/prop-types
const LineItem = ({ item, values, setValues }) => {
  const quantityRef = React.useRef(null);
  const priceRef = React.useRef(null);

  const total = () => {
    if (quantityRef.current !== null && priceRef.current !== null) {
      if (quantityRef.current.value === '' || priceRef.current.value === '') {
        return '0';
      }
      const currentQuantity = parseInt(quantityRef.current.value, 10);
      const currentPrice = parseFloat(priceRef.current.value.replace(',', ''));
      return currentQuantity * currentPrice;
    }
    return item.total;
  };

  return (
    <Row>
      <TD col={1}>
        <ItemsListInput
          data={{ keys: ['items', '0', 'name'] }}
          item={item}
          values={values}
          setValues={setValues}
        />
      </TD>
      <TD col={2}>
        <ItemsListInput
          data={{ keys: ['items', '0', 'quantity'] }}
          item={item}
          values={values}
          setValues={setValues}
          ref={quantityRef}
        />
      </TD>
      <TD col={3}>
        <ItemsListInput
          data={{ keys: ['items', '0', 'price'] }}
          item={item}
          values={values}
          setValues={setValues}
          ref={priceRef}
        />
      </TD>
      <TD col={4}>
        <Total>
          {total()}
        </Total>
      </TD>
      <DeleteIcon col={5} />
    </Row>
  );
};

export default LineItem;

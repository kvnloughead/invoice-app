// eslint-disable-next-line no-use-before-define
import React from 'react';

import ItemsListInput from '../itemslistinput/ItemsListInput';

import {
  Row, TD, Total, DeleteIcon,
} from './style';

// eslint-disable-next-line react/prop-types
const LineItem = ({ item, values, setValues }) => {
  debugger;
  const quantityRef = React.useRef();
  const priceRef = React.useRef();
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
          {(quantityRef.current && priceRef.current)
            ? parseFloat(quantityRef.current.value) * parseFloat(priceRef.current.value.replace(',', '').toLocaleString())
            // eslint-disable-next-line react/prop-types
            : item.total}
        </Total>
      </TD>
      <DeleteIcon col={5} />
    </Row>
  );
};

export default LineItem;

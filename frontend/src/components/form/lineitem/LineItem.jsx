/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import ItemsListInput from '../itemslistinput/ItemsListInput';
import FormContext from '../../../contexts/FormContext';

import {
  Row, TD, Total, DeleteIcon,
} from './style';

const LineItem = ({
  item, index, formattedItems, setFormattedItems,
}) => {
  const { values, setValues } = useContext(FormContext);
  const quantityRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const nameRef = React.useRef(null);

  const calculateTotal = () => {
    if (quantityRef.current !== null && priceRef.current !== null) {
      if (quantityRef.current.value === '' || priceRef.current.value === '') {
        return '0';
      }
      const currentQuantity = parseInt(quantityRef.current.value, 10);
      const currentPrice = parseFloat(priceRef.current.value.replace(',', ''));
      return (currentQuantity * currentPrice)
        .toLocaleString('en-us', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    }
    return item.total;
  };

  const handleDeleteLineItem = (evt) => {
    evt.preventDefault();
    if (formattedItems.length === 1) {
      quantityRef.current.value = 0;
      priceRef.current.value = 0;
      nameRef.current.value = '';
      setValues({
        ...values,
        [`items.${index}.price`]: '0',
        [`items.${index}.quantity`]: '0',
        [`items.${index}.name`]: '',
      });
    } else {
      setFormattedItems([...formattedItems.slice(0, index), ...formattedItems.slice(index + 1)]);
    }
  };

  return (
    <Row>
      <TD col={1}>
        <ItemsListInput
          data={{ keys: ['items', `${index}`, 'name'] }}
          item={item}
          values={values}
          setValues={setValues}
          ref={nameRef}
        />
      </TD>
      <TD col={2}>
        <ItemsListInput
          data={{ keys: ['items', `${index}`, 'quantity'] }}
          item={item}
          values={values}
          setValues={setValues}
          ref={quantityRef}
          total={calculateTotal}
        />
      </TD>
      <TD col={3}>
        <ItemsListInput
          data={{ keys: ['items', `${index}`, 'price'] }}
          item={item}
          values={values}
          setValues={setValues}
          ref={priceRef}
          total={calculateTotal}
        />
      </TD>
      <TD col={4}>
        <Total>
          {calculateTotal()}
        </Total>
      </TD>
      <TD>
        <DeleteIcon col={5} onClick={handleDeleteLineItem} />
      </TD>
    </Row>
  );
};

export default LineItem;

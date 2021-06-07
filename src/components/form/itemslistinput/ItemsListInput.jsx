/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import FormContext from '../../../contexts/FormContext';

import {
  InputContainer, InputElement,
} from './style';

const ItemsListInput = React.forwardRef(({
  data, type, item, total,
}, ref) => {
  const {
    values, setValues, errors, setErrors, setIsValid,
  } = useContext(FormContext);
  const identifier = data.keys.join('.');
  const defaultValue = item[data.keys[2]];

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const [, index, propertyName] = name.split('.');
    if (propertyName === 'name') {
      setValues({ ...values, [name]: value });
    } else if (propertyName !== 'name' && value === '') {
      setValues({ ...values, [name]: '0', [`items.${index}.total`]: 0 });
    } else {
      setValues({ ...values, [name]: value, [`items.${index}.total`]: total() });
    }
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleFocus = (event) => {
    if (data.keys[2] === 'price') {
      const { target } = event;
      const { name, value } = target;
      const newValue = value.replace(',', '');
      setValues({ ...values, [name]: newValue });
    }
  };

  const handleBlur = (event) => {
    if (data.keys[2] === 'price') {
      const { target } = event;
      const { name, value } = target;
      const newValue = parseFloat(value).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      setValues({ ...values, [name]: newValue });
    }
  };

  return (
    <InputContainer>
      <InputElement
        type={type}
        id={identifier}
        name={identifier}
        value={values[identifier] || (typeof values[identifier] === 'string' ? '0' : defaultValue)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        width={data.width}
        ref={ref}
      />
    </InputContainer>
  );
});

export default ItemsListInput;

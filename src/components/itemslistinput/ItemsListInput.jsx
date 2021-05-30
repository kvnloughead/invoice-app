/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from 'react';

import {
  InputContainer, InputElement,
} from './style';

const ItemsListInput = React.forwardRef(({
  data, setValues, values, item,
}, ref) => {
  const identifier = data.keys.join('.');
  const defaultValue = item[data.keys[2]];
  const handleChange = (event) => {
    debugger;
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: target.validationMessage });
    // setIsValid(target.closest('form').checkValidity());
  };

  return (
    <InputContainer>
      <InputElement
        id={identifier}
        name={identifier}
        value={values[identifier] || defaultValue}
        onChange={handleChange}
        width={data.width}
        ref={ref}
      />
    </InputContainer>
  );
});

export default ItemsListInput;

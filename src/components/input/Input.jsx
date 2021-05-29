/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from 'react';

import AppContext from '../../contexts/AppContext';
import { accessObjectProperty } from '../../utils/helpers';

import {
  InputContainer, Label, InputElement,
} from './style';

const Input = ({
  data, setValues, values,
}) => {
  const { currentInvoice } = React.useContext(AppContext);
  const inputValue = accessObjectProperty(currentInvoice, data.keys);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    // setErrors({ ...errors, [name]: target.validationMessage });
    // setIsValid(target.closest('form').checkValidity());
  };

  return (
    <InputContainer>
      <Label htmlForm={data.label}>
        {data.label}
      </Label>
      <InputElement
        id={data.label}
        name={data.label}
        defaultValue={inputValue}
        onChange={handleChange}
        width={data.width}
      />
    </InputContainer>
  );
};

export default Input;

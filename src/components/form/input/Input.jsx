/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import AppContext from '../../../contexts/AppContext';
import { accessObjectProperty } from '../../../utils/helpers';

import {
  InputContainer, Label, InputElement,
} from './style';

const Input = ({
  data, setValues, values,
}) => {
  const { currentInvoice } = React.useContext(AppContext);
  const defaultValue = useMemo(() => accessObjectProperty(currentInvoice, data.keys));
  const identifier = data.keys.join('.');

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
      <Label htmlForm={data.label}>
        {data.label}
      </Label>
      <InputElement
        id={identifier}
        name={identifier}
        value={values[identifier] || defaultValue}
        onChange={handleChange}
        width={data.width}
      />
    </InputContainer>
  );
};

export default Input;

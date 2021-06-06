/* eslint-disable react/prop-types */
import React, { useContext, useMemo } from 'react';

import AppContext from '../../../contexts/AppContext';
import FormContext from '../../../contexts/FormContext';
import { accessObjectProperty } from '../../../utils/helpers';

import {
  InputContainer, Label, Span, InputElement,
} from './style';

const Input = ({ data }) => {
  const { currentInvoice } = useContext(AppContext);
  const {
    values, setValues, errors, setErrors, setIsValid,
  } = useContext(FormContext);
  const defaultValue = useMemo(() => accessObjectProperty(currentInvoice, data.keys));
  const identifier = data.keys.join('.');
  const isError = errors[identifier];

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return (
    <InputContainer>
      <Label isError={isError} htmlForm={data.label}>
        {data.label}
        <Span>{isError && 'Required'}</Span>
      </Label>
      <InputElement
        isError={isError}
        id={identifier}
        name={identifier}
        value={values[identifier] !== undefined ? values[identifier] : defaultValue}
        onChange={handleChange}
        width={data.width}
        required
      />
    </InputContainer>
  );
};

export default Input;

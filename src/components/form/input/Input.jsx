/* eslint-disable react/prop-types */
import React from 'react';

import useDateInput from '../../common/hooks/useDateInput';
import useInput from '../../common/hooks/useInput';

import {
  InputContainer, Label, Span, InputElement,
} from './style';

const Input = ({ data, type }) => {
  const {
    defaultValue, identifier, handleChange, currentInvoice, values, isError,
  } = useInput(data);
  const { displayValue, handleFocus, handleBlur } = useDateInput(currentInvoice);

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
        type={type}
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        displayValue={displayValue}
      />
    </InputContainer>
  );
};

export default Input;

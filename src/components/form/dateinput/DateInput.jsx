/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import AppContext from '../../../contexts/AppContext';
import FormContext from '../../../contexts/FormContext';
import { accessObjectProperty } from '../../../utils/helpers';
import calendarIcon from '../../../images/icon-calendar.svg';

import {
  InputContainer, Label, Span, InputElement, CalendarIcon,
} from './style';

const DateInput = ({ data }) => {
  const { currentInvoice } = useContext(AppContext);
  const {
    values, setValues, errors, setErrors, setIsValid,
  } = useContext(FormContext);
  const inputValue = accessObjectProperty(currentInvoice, data.keys);
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
        <Span>{errors.createdAt && 'Required'}</Span>
      </Label>
      <InputElement
        id={identifier}
        name={identifier}
        defaultValue={inputValue}
        onChange={handleChange}
        width={data.width}
        type="text"
        required
      />
      <CalendarIcon src={calendarIcon} />
    </InputContainer>
  );
};

export default DateInput;

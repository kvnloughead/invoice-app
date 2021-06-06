/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import AppContext from '../../../contexts/AppContext';
import FormContext from '../../../contexts/FormContext';
import { accessObjectProperty } from '../../../utils/helpers';
// import { formatDate } from '../../../utils/helpers';

import {
  InputContainer, Label, Span, InputElement,
} from './style';

const DateInput = ({ data }) => {
  const { currentInvoice } = useContext(AppContext);
  const {
    values, setValues, errors, setErrors, setIsValid,
  } = useContext(FormContext);
  const defaultValue = accessObjectProperty(currentInvoice, data.keys);
  const identifier = data.keys.join('.');
  const isError = errors[identifier];

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleFocus = (event) => {
    debugger;
    console.log(event);
    // const { target } = event;
    // const { name, value } = target;
    // const newValue = value.replace(',', '');
    // setValues({ ...values, [name]: newValue });
  };

  const handleBlur = (event) => {
    debugger;
    console.log(event);
    // const { target } = event;
    // const { name, value } = target;
    // eslint-disable-next-line max-len
    // const newValue = parseFloat(value).toLocaleString('en-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    // setValues({ ...values, [name]: newValue });
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
        value={values[identifier] !== undefined ? values[identifier] : defaultValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        width={data.width}
        type="date"
        required
      />
    </InputContainer>
  );
};

export default DateInput;

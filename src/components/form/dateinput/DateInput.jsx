/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import AppContext from '../../../contexts/AppContext';
import FormContext from '../../../contexts/FormContext';
import { accessObjectProperty, formatDate } from '../../../utils/helpers';

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

  const dateRef = React.useRef(null);
  const formattedDate = (dateRef.current && formatDate(dateRef.current.value))
                        || formatDate(currentInvoice.createdAt);
  const [displayValue, setDisplayValue] = React.useState(formattedDate);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleFocus = () => {
    setDisplayValue('');
  };

  const handleBlur = () => {
    setDisplayValue(formattedDate);
  };

  return (
    <InputContainer>
      <Label isError={isError} htmlForm={data.label}>
        {data.label}
        <Span>{errors.createdAt && 'Required'}</Span>
      </Label>
      <InputElement
        ref={dateRef}
        id={identifier}
        name={identifier}
        value={values[identifier] !== undefined ? values[identifier] : defaultValue}
        displayValue={displayValue}
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

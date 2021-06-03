/* eslint-disable react/prop-types */
import React from 'react';

import AppContext from '../../../contexts/AppContext';
import { accessObjectProperty } from '../../../utils/helpers';
import calendarIcon from '../../../images/icon-calendar.svg';

import {
  InputContainer, Label, InputElement, CalendarIcon,
} from './style';

const DateInput = ({
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
        type="data"
      />
      <CalendarIcon src={calendarIcon} />
    </InputContainer>
  );
};

export default DateInput;

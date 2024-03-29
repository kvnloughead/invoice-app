import React from 'react';
import PropTypes from 'prop-types';

import { FlexRow } from '../utility';

import {
  FormDropdownContainer,
  FormLabel, FormSelect, FormOption,
  Label, Select, Option,
} from './style';
import { dropdownConfig } from '../../../utils/constants';

const Dropdown = ({ type }) => {
  const data = dropdownConfig[type];

  if (type === 'paymentTerms') {
    return (
      <FormDropdownContainer>
        <FormLabel>{data.title}</FormLabel>
        <FormSelect id={data.id}>
          {data.options.map((option) => (
            <FormOption key={`${option}-${Math.random()}`} value={option}>{option}</FormOption>
          ))}
        </FormSelect>
      </FormDropdownContainer>
    );
  }

  return (
    <FlexRow>
      <Label />
      <Select id={data.id}>
        <Option value="" />
        {data.options.map((option) => (
          <Option key={option} value={option}>{option}</Option>
        ))}
      </Select>
    </FlexRow>
  );
};

Dropdown.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Dropdown;

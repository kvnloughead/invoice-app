// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import {
  FormDropdownContainer,
  FormLabel, FormSelect, FormOption,
  Label, Select, Option,
} from './style';
// import data from '../../config/filter-by';
import { dropdownConfig } from '../../utils/constants';

const Dropdown = ({ type }) => {
  const data = dropdownConfig[type];

  if (type === 'paymentTerms') {
    return (
      <FormDropdownContainer>
        <FormLabel>{data.title}</FormLabel>
        <FormSelect id={data.id}>
          {data.options.map((option) => (
            <FormOption key={option} value={option}>{option}</FormOption>
          ))}
        </FormSelect>
      </FormDropdownContainer>
    );
  }

  return (
    <div>
      <Label>{data.title}</Label>
      <Select id={data.id}>
        <Option value="" />
        {data.options.map((option) => (
          <Option key={option} value={option}>{option}</Option>
        ))}
      </Select>
    </div>
  );
};

Dropdown.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Dropdown;

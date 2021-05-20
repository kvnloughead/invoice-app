// eslint-disable-next-line no-use-before-define
import React from 'react';

import { Label, Select, Option } from './style';
import data from '../../config/filter-by';

const Dropdown = () => (
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

export default Dropdown;

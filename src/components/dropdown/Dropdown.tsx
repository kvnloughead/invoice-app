import React from 'react';

import { Label, Select, Option } from  './style';
import config from '../../config/filter-by';

const Dropdown = () => {
  return (
    <div>
      <Label >{config.title}</Label>
      <Select id={config.id}>
        <Option value=""></Option>
        {config.options.map((option) => (
          <Option key={option} value={option}>{option}</Option>
        ))}
      </Select>
    </div>
  );
}

export default Dropdown;

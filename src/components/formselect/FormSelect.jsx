// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';

const Dropdown = ({ type }) => {
  const data = dropdownConfig[type];
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
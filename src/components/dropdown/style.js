import styled from 'styled-components';
import selectArrow from '../../images/icons/select-arrow.svg';

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0C0E16;
`;

export const Select = styled.select`
  border: none;
  background: transparent;
  width: 24.5px;
  margin-right: 40.5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('${selectArrow}');
  background-repeat: no-repeat;
  background-position: center;
`;

export const Option = styled.option`
  
`;

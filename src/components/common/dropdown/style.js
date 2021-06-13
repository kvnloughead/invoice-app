import styled from 'styled-components';
import selectArrow from '../../../images/icons/select-arrow.svg';

export const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colorPrimary};
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

export const FormDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
`;

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colorInputLabel};
  margin-bottom: 10px;
`;

export const FormSelect = styled.select`
  background: ${({ theme }) => theme.bgInput};
  color: ${({ theme }) => theme.colorInput};
  max-width: 240px;
  height: 48px;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.5) 1px solid;
  padding-left: 20px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  box-sizing: border-box;
`;

export const FormOption = styled.option`
  color: ${({ theme }) => theme.colorInput};
`;

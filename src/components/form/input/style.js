import styled from 'styled-components';

const widths = {
  1: '504px',
  2: '240px',
  3: '152px',
};

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px; 
  &:first-of-type {
    margin-top: 17px;
  }
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme, isError }) => (isError ? '#EC5757' : theme.colorInputLabel)};
  margin-bottom: 10px;
`;

export const Span = styled.span`
  color: #EC5757;
  margin-right: 24px;
  float: right;
`;

export const InputElement = styled.input`
  width: ${({ width }) => widths[width]};
  color: ${({ theme }) => theme.colorInput};
  background: ${({ theme }) => theme.bgInput};
  height: 48px;
  border-radius: 5px;
  border: ${({ isError }) => (isError ? '#EC5757' : 'rgba(0, 0, 0, 0.5)')} 1px solid;
  padding-left: 20px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  box-sizing: border-box;
  margin-right: 24px;

  &:before {
    content: "${({ displayValue }) => displayValue}";
    margin-right: 24px; 
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.colorInput};
    position: absolute;
    background: ${({ theme }) => theme.bgInput};
  }
`;

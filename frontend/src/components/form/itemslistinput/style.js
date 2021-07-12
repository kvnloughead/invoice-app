import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputElement = styled.input`
  color: ${({ theme }) => theme.colorInput};
  background: ${({ theme }) => theme.bgInput};
  height: 48px;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.5) 1px solid;
  padding-left: 20px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  box-sizing: border-box;

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

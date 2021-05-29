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
  color: #7C5DFA;
  margin-bottom: 10px;
`;

export const InputElement = styled.input`
  width: ${({ width }) => widths[width]};
  height: 48px;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.05) 1px solid;
  padding-left: 20px;
  font-family: Spartan;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  box-sizing: border-box;
  margin-right: 24px;
`;

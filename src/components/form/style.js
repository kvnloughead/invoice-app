import styled from 'styled-components';

export const FormContainer = styled.form`
  visibility: ${({ form }) => (form ? 'visible' : 'hidden')};
  background: ${({ theme }) => theme.bgForm};
  border-radius: 25px;
  width: 719px;
  padding: 56px 56px 32px 159px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-sizing: border-box;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colorPrimary};

  &:before {
    content: "#";
    font-weight: 700;
    color: #888EB0;
  }
`;

export const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  border: none;
  margin: 48px 0 0;
`;

export const Legend = styled.legend`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7C5DFA;
`;

export const Buttons = styled.div`
  display: flex;
  padding-top: 39px;
  gap: 8px;
  justify-content: flex-end;
`;

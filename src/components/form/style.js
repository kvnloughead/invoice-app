import styled from 'styled-components';
import { flexCenter } from '../../utils/utility-styles';

export const FormContainer = styled.form`
  visibility: ${({ form }) => (form ? 'visible' : 'hidden')};
  background: ${({ theme }) => theme.bgForm};
  border-radius: 25px;
  max-width: 719px;
  padding: 56px 56px 0 159px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  box-sizing: border-box;
  overflow-y: overlay;
  height: 100vh;
  border-radius: 0 30px 30px 0;

  @media screen and (max-width: 1000px) {
    top: 103px;
    padding-left: 56px;
    max-width: 616px;
  }

`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colorPrimary};
`;

export const Span = styled.span`
  &:before {
    content: "${({ form }) => (form === 'edit' ? '#' : '')}";
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
  align-items: center;
  justify-content: ${({ form }) => (form === 'new' ? 'space-between' : 'flex-end')};

  position: fixed;
  bottom: 0;
  left: 103px;
  z-index: 2;

  padding: 31px 56px 31px;
  gap: 8px;
  width: 616px;
  height: 110px;
  background: ${({ theme }) => theme.bgBtnContainer};

  box-sizing: border-box;
  border-radius: 0 30px 30px 0;

  @media screen and (max-width: 1000px) {
    left: 0;
    padding-left: 56px;
    width: 616px;
  }
`;

export const FlexRow = styled.div`
  ${flexCenter('row')}
  gap: 8px;
`;

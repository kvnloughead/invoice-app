import styled from 'styled-components';

import { secondaryTextStyles, flexColumnStyles, flexRowStyles } from '../../../utils/utility-styles';
import leftArrow from '../../../images/icon-arrow-left.svg';

export const Container = styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: auto;

  @media screen and (max-width: 1000px) {
  }
`;

export const BackButton = styled.button`
  margin: 64px 0 32px;
  height: 15px;
  padding: 0;
  border: none;
  background-size: 4px 8.5px;
  background-repeat: no-repeat;
  background-position: left;
  background-color: transparent;
  background-image: url('${leftArrow}');
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7E88C3;
  padding-left: 24px;
`;

export const Toolbar = styled.ul`
  box-shadow: 0px 10px 10px -10px #48549F1A;
  background: ${({ theme }) => theme.bgInvoice};
  margin: 0; 
  padding: 0 32px;
  list-style: none;
  width: 100%;
  height: 88px;
  margin-bottom: 16px;
  box-shadow: 0px 10px 10px -10px #48549F1A;
  border-radius: 8px;
  ${flexColumnStyles({ ai: 'center', jc: 'space-between' })}
  box-sizing: border-box;
`;

export const Label = styled.h3`
  ${secondaryTextStyles}
  margin: 0;
  margin-right: 16px;
`;

export const FlexRow = styled.div`
  ${flexRowStyles({ ai: 'center' })}
`;

export const Buttons = styled.ul`
  ${flexRowStyles({})}
  gap: 8px;
`;

/* eslint-disable max-len */
import styled from 'styled-components';

import plusIcon from '../../../images/icons/plus.svg';

export const ButtonContainer = styled.button`
  width: ${({ theme, buttonStyle }) => theme.button[buttonStyle].width};
  height: 48px;
  border-radius: 200px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  display: flex;
  align-items: center;
  padding: 8px;
  font-family: 'Spartan', Arial, sans-serif;
  
  color: ${({ theme, buttonStyle }) => theme.button[buttonStyle].color};
  background: ${({ theme, buttonStyle }) => theme.button[buttonStyle].background};
  &:hover {
    background: ${({ theme, buttonStyle }) => theme.button[buttonStyle].hover};
    color: ${({ theme, buttonStyle }) => theme.button[buttonStyle].hoverColor};
  }

  justify-content:${(props) => (props.buttonStyle === 'newInvoice' ? 'space-between' : 'center')};
  padding-right: ${(props) => props.buttonStyle === 'newInvoice' && '15px'};
`;

export const PlusInCircle = styled.div`
  border-radius: 50%;
  background: #fff;
  width: 32px;
  height: 32px;
  background-image: url('${plusIcon}');
  background-repeat: no-repeat;
  background-position: center;
`;

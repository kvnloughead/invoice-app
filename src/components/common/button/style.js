/* eslint-disable max-len */
import styled from 'styled-components';

import plusIcon from '../../../images/icons/plus.svg';

export const ButtonContainer = styled.button`
  width: ${({ theme, type }) => theme.button[type].width};
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
  
  color: ${({ theme, type }) => theme.button[type].color};
  background: ${({ theme, type }) => theme.button[type].background};
  &:hover {
    background: ${({ theme, type }) => theme.button[type].hover};
    color: ${({ theme, type }) => theme.button[type].hoverColor};
  }

  justify-content:${(props) => (props.type === 'newInvoice' ? 'space-between' : 'center')};
  padding-right: ${(props) => props.type === 'newInvoice' && '15px'};
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

import styled from 'styled-components';

import plusIcon from '../../../images/icons/plus.svg';
import { buttonLabels } from '../../../utils/constants';

export const ButtonContainer = styled.button`
  padding: 8px;
  padding-right: ${(props) => props.buttonStyle === 'newInvoice' && '15px'};
  height: 48px;
  width: ${({ theme, buttonStyle }) => theme.button[buttonStyle].width()};

  background: ${({ theme, buttonStyle }) => theme.button[buttonStyle].background};
  border-radius: 200px;
  border: none;

  font-family: 'Spartan', Arial, sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme, buttonStyle }) => theme.button[buttonStyle].color};
  
  display: flex;
  align-items: center;
  justify-content:${(props) => (props.buttonStyle === 'newInvoice' ? 'space-between' : 'center')};

  &:after {
    content: "${({ buttonStyle }) => buttonLabels[buttonStyle]()}";
  }
  
  &:hover {
    background: ${({ theme, buttonStyle }) => theme.button[buttonStyle].hover};
    color: ${({ theme, buttonStyle }) => theme.button[buttonStyle].hoverColor};
  }

  @media screen and (max-width: 550px) {
    width: ${({ theme, buttonStyle }) => theme.button[buttonStyle].width(true)};
    &:after {
      content: "${({ buttonStyle }) => buttonLabels[buttonStyle](true)}";
    }
  }
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

import styled from 'styled-components';

import plusIcon from '../../images/icons/plus.svg';

export const ButtonContainer = styled.button`
  width: ${(props) => props.styles.width};
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
  
  color: ${(props) => (props.styles.hasDarkMode ? props.styles.color[props.mode] : props.styles.color)};
  background: ${(props) => (props.styles.hasDarkMode ? props.styles.background[props.mode] : props.styles.background)};
  &:hover {
    background: ${(props) => (props.styles.hasDarkMode ? props.styles.hover[props.mode] : props.styles.hover)};
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

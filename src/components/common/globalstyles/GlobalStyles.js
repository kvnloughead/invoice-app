import { createGlobalStyle } from 'styled-components';

import calendarIcon from '../../../images/icon-calendar.svg';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.colorPrimary};
    font-family: 'Spartan', Helvetica, Arial, sans-serif;
    transition: all 0.50s linear;
  }

  form::-webkit-scrollbar {
    width: 40px;
  }

  form::-webkit-scrollbar-thumb {
    background-color: #DFE3FA;
    border: 16px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 9999px;
  }

  form::-webkit-scrollbar-corner {
    display: none;
  }

  a[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {
    cursor: pointer;
  }
  input[type='date']::-webkit-calendar-picker-indicator {
    background-image: url('${calendarIcon}');
    margin-right: 15px;
  }
`;

export default GlobalStyles;

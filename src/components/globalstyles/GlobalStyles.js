import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.colorPrimary};
    font-family: 'Spartan', Helvetica, Arial, sans-serif;
    transition: all 0.50s linear;
  }
  a[href], input[type='submit'], input[type='image'], label[for], select, button, .pointer {
    cursor: pointer;
  }
`;

export default GlobalStyles;

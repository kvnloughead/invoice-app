import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgMain};
    color: ${({ theme }) => theme.textMain};
    font-family: 'Spartan', Helvetica, Arial, sans-serif;
    transition: all 0.50s linear;
  }
`;

export default GlobalStyles;

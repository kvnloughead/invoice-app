// eslint-disable-next-line no-use-before-define
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;

// eslint-disable-next-line no-unused-vars
const Toggler = ({ theme, toggleTheme }) => (
  <Button onClick={toggleTheme}>
    Switch Theme
  </Button>
);
Toggler.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggler;

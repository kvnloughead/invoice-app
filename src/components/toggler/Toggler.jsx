import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';

import moon from '../../images/icon-moon.svg';
import sun from '../../images/icon-sun.svg';
import { bgStandard } from '../../utils/utility-styles';

const Button = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  justify-self: flex-end;
  ${bgStandard((({ theme }) => (theme.isLight ? moon : sun)))}
  background-size: 20px 20px;
  padding: 42px 51.5px;
  border-bottom: solid 1px #494E6E;
  }
`;

const Toggler = ({ toggleTheme }) => (
  <Button onClick={toggleTheme} />
);
Toggler.propTypes = {
  toggleTheme: func.isRequired,
};
export default Toggler;

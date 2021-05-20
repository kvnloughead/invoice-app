// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import buttonConfig from '../../utils/constants';
import { ButtonContainer, PlusInCircle } from './style';

const Button = ({ type, mode }) => (
  <>
    <ButtonContainer type={type} mode={mode} styles={buttonConfig[type].styles}>
      {type === 'newInvoice' && <PlusInCircle />}
      { buttonConfig[type].label }
    </ButtonContainer>
  </>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default Button;

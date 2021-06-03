import React from 'react';
import PropTypes from 'prop-types';

import { buttonLabels } from '../../../utils/constants';
import { ButtonContainer, PlusInCircle } from './style';

const Button = ({ type, handleClick }) => (
  <>
    <ButtonContainer type={type} onClick={handleClick}>
      {type === 'newInvoice' && <PlusInCircle />}
      { buttonLabels[type] }
    </ButtonContainer>
  </>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

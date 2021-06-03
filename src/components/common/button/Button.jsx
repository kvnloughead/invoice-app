import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { buttonLabels } from '../../../utils/constants';
import { ButtonContainer, PlusInCircle } from './style';

const Button = ({ type, handleClick }) => (
  <>
    <ButtonContainer id={`${type}-${uuidv4()}`} type={type} onClick={handleClick}>
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

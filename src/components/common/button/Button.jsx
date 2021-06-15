import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// import { buttonLabels } from '../../../utils/constants';
import { ButtonContainer, PlusInCircle } from './style';

const Button = ({
  disabled, type, buttonStyle, handleClick,
}) => (
  <>
    <ButtonContainer
      id={`${buttonStyle}-${uuidv4()}`}
      type={type}
      buttonStyle={buttonStyle}
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonStyle === 'newInvoice' && <PlusInCircle />}
      {/* { buttonLabels[buttonStyle] } */}
    </ButtonContainer>
  </>
);

Button.propTypes = {
  buttonStyle: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

export default Button;
